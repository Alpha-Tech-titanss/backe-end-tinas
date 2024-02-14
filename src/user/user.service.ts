import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as md5 from "md5";
import * as moment from "moment";
import { Model, Types } from "mongoose";
import { DefaultConfig } from "src/default-config/entities/default-config.entity";
import { NotificationService } from "src/notification/notification.service";
import { ProgressService } from "src/progress/progress.service";
import { TripService } from "src/trip/trip.service";
import { emailtemplate, encrypte } from "src/utils/encryption";
import { User } from "./entities/user.entity";
const nodemailer = require("nodemailer");

@Injectable()
export class UserService {
  transporter;

  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    @InjectModel(DefaultConfig.name)
    private DefaultConfigModel: Model<DefaultConfig>,
    private notificationService: NotificationService,
    private tripService: TripService,
    private progressService: ProgressService
  ) {
    this.init();
  }

  async init() {
    this.transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      auth: {
        user: "<email>",
        pass: "<password>",
      },
    });
  }

  async create(informations: any) {
    if (informations.password)
      informations.password = await encrypte(informations?.password);
    const notification = await this.notificationService.create();
    const { selectedTripId, ...rest } = informations;
    const user = await new this.UserModel({
      ...rest,
      notification: notification._id,
    }).save();
    await this.sendConfirmationCode(user._id);
    // change the behavior in here
    await this.joinTrip(user._id, selectedTripId);
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findByEmail(email: string) {
    return await this.UserModel.findOne({ email })
      .populate(["notifications"])
      .populate({ path: "progress", populate: { path: "chapters" } });
  }

  findOne(id: string) {
    return this.UserModel.findById(id).populate(["notifications", "progress"]);
  }

  async update(id: string, informations: any) {
    return await this.UserModel.findByIdAndUpdate(id, informations);
  }
  async addSpecialTrip(id: string, trip: any) {
    return await this.UserModel.findByIdAndUpdate(id, {
      $push: { specialTrips: { $each: [trip] } },
    });
  }
  async isSpecialTripExists(userId: string, trip: any) {
    return await this.UserModel.findOne({
      _id: Types.ObjectId(userId),
      specialTrips: { $in: [trip] },
    });
  }
  remove(id: string) {
    return `This action removes a #${id} user`;
  }

  async rankList(start: number, limit: number) {
    return await this.UserModel.find()
      .sort({ points: -1, createdAt: -1 })
      .skip(start)
      .limit(limit);
  }

  async sendConfirmationCode(userId) {
    try {
      const user = await this.UserModel.findById(userId);
      const timestamp = moment(
        moment()
          .add(moment().minute() > 30 && 1, "hours")
          .minutes(moment().minute() <= 30 ? 30 : 0)
          .format("hh:mm a"),
        "hh:mm a"
      ).unix();
      const code = (await md5(timestamp + user._id)).slice(0, 6);
      await this.transporter.sendMail({
        from: "<email>", // sender address
        to: [user.email], // list of receivers
        subject: "<subject>", // Subject line
        text: "<code>", // plain text body
        html: emailtemplate(code), // html body
      });
      return 200;
    } catch (e) {
      console.log(e);
      return 500;
    }
  }

  async activateAcount(userId, code) {
    const user = await this.UserModel.findById(userId);
    const timestamp = moment(
      moment()
        .add(moment().minute() > 30 && 1, "hours")
        .minutes(moment().minute() <= 30 ? 30 : 0)
        .format("hh:mm a"),
      "hh:mm a"
    ).unix();
    const expectedCode = (await md5(timestamp + user._id)).slice(0, 6);
    if (expectedCode == code) {
      await this.UserModel.findByIdAndUpdate(user._id, {
        EmailConfirmation: true,
      });
      return 200;
    }
    return 400;
  }

  async joinTrip(userId, tripId) {
    if (tripId) {
      const trip = await this.tripService.findOne(tripId);
      if (!trip)
        throw new BadRequestException(
          "Trip not found for provided selectedTripId",
          { cause: new Error(), description: "Some error description" }
        );
    }
    const config = await this.DefaultConfigModel.findOne();
    if (!config)
      throw new BadRequestException(
        "Config not found for defaultSelectedTripId",
        { cause: new Error(), description: "Some error description" }
      );
    const user = await this.UserModel.findById(userId);
    const trip = await this.tripService.findOne(
      tripId || config.defaultSelectedTripId
    );
    if (user && trip) {
      user.selectedTrip = trip._id;
      user.progress.push(
        (await this.progressService.create({ trip: trip._id, userId }))._id
      );
      await user.save();
    }
  }

  async selectTrip(userId, tripId = "6181b4a7edbd5b648e4d12b4") {
    const trip = await this.tripService.findOne(tripId);
    const user = await this.UserModel.findOne({ _id: userId }).populate({
      path: "trips",
      match: { trip: trip._id },
    });
    if (user && trip) {
      user.selectedTrip = trip._id;
      await user.save();
    }
  }

  async trackTrip(userId, placeId) {
    const user = await this.UserModel.findById(userId).populate(["progress"]);
    const progress = await this.progressService.findByUserAndTrip(
      user._id,
      user.selectedTrip
    );

    const chapter = await this.tripService.chapterFromPlace(placeId);
    const chapterProgress = await this.progressService.ChapterProgressModel.findOne(
      { progress: progress._id, id: chapter._id }
    );
    if (chapterProgress && !chapterProgress.places.includes(placeId)) {
      chapterProgress.places.push(placeId);
      await chapterProgress.save();
    } else {
      progress.placesId.push(placeId);
      progress.chapters.push(
        (
          await new this.progressService.ChapterProgressModel({
            progress: progress._id,
            id: chapter._id,
            places: [placeId],
          }).save()
        )._id
      );
    }
    await this.progressService.update(progress._id, progress);
    return chapterProgress;
  }

  async getTripProgress(userId, tripId) {
    const user = await this.UserModel.findById(userId).populate(["progress"]);
    const trip = await this.tripService.findOne(tripId);
    let tripProgress: any = { ...trip.toJSON() };
    const progress = await this.progressService
      .findByUserAndTrip(user._id, tripId)
      .populate({ path: "chapters" });
    const placesId = progress && progress.placesId ? progress.placesId : [];

    let totalPlaces = 0;
    let totalPlacesDone = 0;

    for (let [i, chapter] of trip.chapters.entries()) {
      totalPlaces += chapter.places.length;
      let chapterPlacesDone = 0;
      for (let [j, place] of trip.chapters[i].places.entries()) {
        if (placesId.includes(place._id)) {
          totalPlacesDone++;
          chapterPlacesDone++;
          tripProgress.chapters[i].places[j].done = true;
        } else {
          tripProgress.chapters[i].places[j].done = false;
        }
      }
      tripProgress.chapters[i].progress =
        (chapterPlacesDone * 100) / chapter.places.length;
    }
    tripProgress = {
      ...tripProgress,
      progress: (totalPlacesDone * 100) / totalPlaces,
    };
    return tripProgress;
  }
  async addTripLanguage(tripId: string, lang: string, userId: string) {
    const user = await this.UserModel.findById(userId);
    const trip = await this.tripService.findOne(tripId);

    if (user && trip) {
      const tripLanguageIndex = user.tripLanguages.findIndex(
        (tl) => tl.tripId === tripId
      );
      if (tripLanguageIndex !== -1) {
        // TripId exists, update the value
        await user.update(
          { $set: { "tripLanguages.$[el].lang": lang } },
          {
            arrayFilters: [{ "el.tripId": tripId }],
            upsert: true,
          }
        );
      } else {
        // TripId doesn't exist, add a new entry
        user.tripLanguages.push({ tripId, lang });
        await user.save();
      }
    } else {
      return "User or Trip Not Found";
    }
  }
}

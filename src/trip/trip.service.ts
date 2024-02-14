import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import * as qrCode from "qrcode";
import { BundleService } from "src/bundle/bundle.service";
import { SupplierService } from "src/supplier/supplier.service";
import { UserService } from "src/user/user.service";
import * as voucherCodes from "voucher-code-generator";
import {
  ApplyAccessCodeInput,
  SearchAccessCodeInput,
  TripInput,
} from "./dto/create-trip.input";
import { UpdateTripInput } from "./dto/update-trip.input";
import { AccessCode } from "./entities/access-code.entity";
import { Chapter } from "./entities/chapter.entity";
import { Place } from "./entities/place.entity";
import { Trip } from "./entities/trip.entity";
@Injectable()
export class TripService {
  constructor(
    @InjectModel(Trip.name) private TripModel: Model<Trip>,
    @InjectModel(Chapter.name) private ChapterModel: Model<Chapter>,
    @InjectModel(Place.name) private PlaceModel: Model<Place>,
    @InjectModel(AccessCode.name) private AccessCodeModel: Model<AccessCode>,

    private bundleService: BundleService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private supplierService: SupplierService
  ) {}

  async createTrip(createTripInput: TripInput) {
    const suppliers = createTripInput.suppliers;
    await this.supplierService.validateSuppliers(suppliers);
    return new this.TripModel(createTripInput).save();
  }

  async addChapter(createTripChapterInput) {
    const trip = await this.TripModel.findById(createTripChapterInput.id);
    const chapter = await new this.ChapterModel(
      createTripChapterInput.chapter
    ).save();
    trip.chapters.push(chapter._id);
    return await this.TripModel.findByIdAndUpdate(trip._id, trip);
  }

  async addPlace(createPlaceInput) {
    const tripChapter = await this.ChapterModel.findById(createPlaceInput.id);
    const bundle = await this.bundleService.createBundle(
      createPlaceInput.bundle
    );
    const place = await new this.PlaceModel({
      ...createPlaceInput.place,
      bundle: bundle._id,
    }).save();
    tripChapter.places.push(place._id);
    return await this.ChapterModel.findByIdAndUpdate(
      tripChapter._id,
      tripChapter
    );
  }

  findAll() {
    return this.TripModel.find()
      .populate({
        path: "chapters",
        populate: { path: "places" },
      })
      .populate({ path: "suppliers" });
  }

  async findOne(id: string, user = null) {
    const trip = await this.TripModel.findById(id).populate({
      path: "chapters",
      populate: { path: "places", populate: { path: "bundle" } },
    });

    if (!user) {
      return trip;
    }
    if (trip.isSpecial) {
      const exists = await this.userService.isSpecialTripExists(
        user.id,
        trip._id
      );
      if (exists) return trip;
      throw new UnauthorizedException();
    } else return trip;
  }

  findOneChapter(id: string) {
    return this.ChapterModel.findById(id).populate({
      path: "places",
      populate: { path: "bundle" },
    });
  }

  findOnePlace(id: string) {
    return this.PlaceModel.findById(id);
  }

  update(id: string, updateTripInput: UpdateTripInput) {
    return `This action updates a #${id} trip`;
  }

  remove(id: string) {
    return this.TripModel.findByIdAndDelete(id);
  }

  removeChapter(id: string) {
    return this.ChapterModel.findByIdAndDelete(id);
  }

  removePlace(id: string) {
    return this.PlaceModel.findByIdAndDelete(id);
  }

  chapterFromPlace(id) {
    return this.ChapterModel.findOne({ places: { $in: [id] } }).populate({
      path: "places",
      populate: { path: "bundle" },
    });
  }

  async addImageToPlace(id, photos) {
    const place = await this.PlaceModel.findById(id);
    place.images = photos;
    return await place.save();
  }

  async createAccessCode(createTripAcessCodeInput) {
    const codes = voucherCodes.generate({
      length: 8,
      count: createTripAcessCodeInput?.count || 1,
    });
    const trip = await this.TripModel.findById(createTripAcessCodeInput.id);
    const accessCodesToSave = [];
    for (const code of codes) {
      const qr = await qrCode.toDataURL(code);
      accessCodesToSave.push({
        code,
        tripId: trip._id,
        qrCode: qr,
      });
    }
    await this.AccessCodeModel.insertMany(accessCodesToSave);
    const res = await this.AccessCodeModel.find({ tripId: trip._id });
    return res;
  }

  async applyTripAccessCode(applyAccessCodeInput: ApplyAccessCodeInput, user) {
    const found = await this.AccessCodeModel.find({
      tripId: Types.ObjectId(applyAccessCodeInput.id),
      code: applyAccessCodeInput.code,
    });
    if (found.length) {
      await this.userService.addSpecialTrip(
        user.id,
        Types.ObjectId(applyAccessCodeInput.id)
      );
      return "Access code is valid";
    } else {
      return "Invalid Access code";
    }
  }
  async getAllTripsAccessCodes() {
    const trips = await this.AccessCodeModel.find();
    return trips;
  }
  async searchAccessCode(searchAccessCodeInput: SearchAccessCodeInput, user) {
    let found = null;
    if (searchAccessCodeInput.code) {
      found = await this.AccessCodeModel.find({
        code: searchAccessCodeInput.code,
      });
    } else if (searchAccessCodeInput.qrCode) {
      found = await this.AccessCodeModel.find({
        qrCode: searchAccessCodeInput.qrCode,
      });
    }
    if (found.length) {
      await this.userService.addSpecialTrip(
        user.id,
        Types.ObjectId(found[0].tripId)
      );
      return found[0];
    } else {
      return "Invalid Access code";
    }
  }
}

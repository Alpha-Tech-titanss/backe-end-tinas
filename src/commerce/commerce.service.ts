import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { exec } from 'child_process';
import { renameSync } from 'fs';
import { Model, Types } from 'mongoose';
import { extname, join } from 'path';
import { ReviewService } from 'src/review/review.service';
import { CreateBaseCommerceInput } from './dto/create-base-commerce.input';
import { Commerce } from './entities/base-commerce.entity';
import { BusinessType, CollectionType, CommerceType } from './entities/commerce.enum';
import { ActivityService } from './services/activity.service';
import { BarService } from './services/bar.service';
import { CafeService } from './services/cafe.service';
import { GuesthouseService } from './services/guesthouse.service';
import { HotelService } from './services/hotel.service';
import { JuiceshopService } from './services/juiceshop.service';
import { JwajemshopService } from './services/jwajemshop.service';
import { LandmarkService } from './services/landmark.service';
import { MansionService } from './services/mansion.service';
import { RestaurantService } from './services/restaurant.service';
import { RooftopService } from './services/rooftop.service';
import { ShopService } from './services/shop.service';

@Injectable()
export class CommerceService {
  constructor(
    @InjectModel(Commerce.name) private BaseCommerceModel: Model<Commerce>,
    private readonly reviewService: ReviewService,
    private readonly restaurantService: RestaurantService,
    private readonly cafeService: CafeService,
    private readonly barService: BarService,
    private readonly jwajemshopService: JwajemshopService,
    private readonly juiceshopService: JuiceshopService,
    private readonly hotelService: HotelService,
    private readonly guesthouseService: GuesthouseService,
    private readonly shopService: ShopService,
    private readonly lanmarkService: LandmarkService,
    private readonly rooftopService: RooftopService,
    private readonly activityService: ActivityService,
    private readonly mansionService: MansionService,
  ) { }

  async create(createBaseCommerceInput: CreateBaseCommerceInput) {
    let profile;
    switch (createBaseCommerceInput.type) {
      case CommerceType.Bar:
        {
          profile = await this.barService.create();
        }
        break;
      case CommerceType.Cafe:
        {
          profile = await this.cafeService.create();
        }
        break;
      case CommerceType.GuestHouse:
        {
          profile = await this.guesthouseService.create();
        }
        break;
      case CommerceType.Hotel:
        {
          profile = await this.hotelService.create();
        }
        break;
      case CommerceType.JuiceShop:
        {
          profile = await this.juiceshopService.create();
        }
        break;
      case CommerceType.JwajemShop:
        {
          profile = await this.jwajemshopService.create();
        }
        break;
      case CommerceType.Shop:
        {
          profile = await this.shopService.create();
        }
        break;
      case CommerceType.Restaurant:
        {
          profile = await this.restaurantService.create();
        }
        break;
      case CommerceType.Landmark:
        {
          profile = await this.lanmarkService.create();
        }
        break;
      case CommerceType.RoofTop:
        {
          profile = await this.rooftopService.create();
        }
        break;
      case CommerceType.Mansion:
        {
          profile = await this.mansionService.create();
        }
        break;
      case CommerceType.Activity:
        {
          profile = await this.activityService.create();
        }
        break;
    }

    const collectionType = createBaseCommerceInput.type in BusinessType ? CollectionType.Business : CollectionType.Discover

    const commerce = new this.BaseCommerceModel({
      ...createBaseCommerceInput,
      collectionType,
      profile: profile._id,
    }).save();
    return commerce;
  }

  findAll() {
    return this.BaseCommerceModel.find({ collectionType: CollectionType.Business })
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: { path: 'rooms' , populate: { path: 'reviews' } } })
      .populate({ path: 'profile', populate: ['menu'] });
  }

  findAllGroupByType() {
    return this.BaseCommerceModel.aggregate([{ $group: { _id: 'type' } }]);
  }

  findByProfileId(id) {
    return this.BaseCommerceModel.findOne({
      $or: [{ profile: Types.ObjectId(id) }, { profile: id }],
    });
  }

  findOne(id: string) {
    //console.log(id)
    return this.BaseCommerceModel.findById(id)
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: { path: 'rooms' , populate: { path: 'reviews' } } })
      .populate({ path: 'profile', populate: ['menu'] });
  }

  async update(id: string, updateBaseCommerceInput) {
    const commerce = await this.BaseCommerceModel.findById(id);
    updateBaseCommerceInput.images = [
      ...commerce.images,
      ...updateBaseCommerceInput.images,
    ];
    return this.BaseCommerceModel.findByIdAndUpdate(
      commerce._id,
      updateBaseCommerceInput,
    );
  }

  async reviewRoom ( reviewInfo ) {
    const room = await this.hotelService.findRoomById(reviewInfo.roomId).populate('reviews')
    const review = await this.reviewService.create({...reviewInfo , reviewed: reviewInfo.roomId });
    room.reviews.push(review._id);
    room.rate =
      (room.rate * (room.reviews.length - 1) + review.rating) /
      room.reviews.length;
    await room.save()
    return review
  }

  async removeReviewRoom( id ) {
    const review = await this.reviewService.findOne(id) ;
    const room = await this.hotelService.findRoomById(
      review.reviewed,
    ).populate('reviews')
    room.rate = ( room.reviews.length - 1 == 0 ) ? 0 : (room.rate * room.reviews.length - review.rating) / ( room.reviews.length - 1 );
    await this.reviewService.remove(review._id , review.user)
    await room.save()
    return review
  }

  findRoom ( id ) {
    return this.hotelService.findRoomById(id)
  }

  remove(id: string) {
    return this.BaseCommerceModel.findByIdAndDelete(id)
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: { path: 'rooms' , populate: { path: 'reviews' } } })
      .populate({ path: 'profile', populate: ['menu'] });
  }

  AllCommerceType(type) {
    return this.BaseCommerceModel.find({ type: type })
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: { path: 'rooms' , populate: { path: 'reviews' } } })
      .populate({ path: 'profile', populate: ['menu'] });
  }

  async reviewCommerce(reviewInfo) {
    const commerce = await this.BaseCommerceModel.findById(
      reviewInfo.commerceId,
    ).populate('reviews')
    const review = await this.reviewService.create({...reviewInfo , reviewed: reviewInfo.commerceId });
    commerce.reviews.push(review._id);
    commerce.generalRating = (commerce.generalRating * (commerce.reviews.length - 1) + review.rating) /
      commerce.reviews.length;
    if (reviewInfo.detailRating) {
      commerce.generalDetailRating.food = Math.round((commerce.generalDetailRating.food * (commerce.reviews.length - 1) + reviewInfo.detailRating.food) / commerce.reviews.length)
      commerce.generalDetailRating.hospitality = Math.round((commerce.generalDetailRating.hospitality * (commerce.reviews.length - 1) + reviewInfo.detailRating.hospitality) / commerce.reviews.length)
      commerce.generalDetailRating.comfortability = Math.round((commerce.generalDetailRating.comfortability * (commerce.reviews.length - 1) + reviewInfo.detailRating.comfortability) / commerce.reviews.length)
      commerce.generalDetailRating.atmosphere = Math.round((commerce.generalDetailRating.atmosphere * (commerce.reviews.length - 1) + reviewInfo.detailRating.atmosphere) / commerce.reviews.length)
    }
    await this.BaseCommerceModel.findByIdAndUpdate(
      reviewInfo.commerceId,
      commerce,
    );
    return review
  }

  async removeReviewCommerce( id ) {
    const review = await this.reviewService.findOne(id) ;
    const commerce = await this.BaseCommerceModel.findById(review.reviewed).populate('reviews')
    
    commerce.generalRating = ( commerce.reviews.length - 1 == 0 ) ? 0 : ((commerce.generalRating * commerce.reviews.length) - review.rating) / (commerce.reviews.length - 1);

    if (review.travlerRating) {
      commerce.generalDetailRating.food = ( commerce.reviews.length - 1 == 0 ) ? 0 : Math.round((commerce.generalDetailRating.food * commerce.reviews.length - review.travlerRating.food) / (commerce.reviews.length - 1) )
      commerce.generalDetailRating.hospitality = ( commerce.reviews.length - 1 == 0 ) ? 0 :  Math.round((commerce.generalDetailRating.hospitality * commerce.reviews.length - review.travlerRating.hospitality) / (commerce.reviews.length - 1))
      commerce.generalDetailRating.comfortability = ( commerce.reviews.length - 1 == 0 ) ? 0 :  Math.round((commerce.generalDetailRating.comfortability * commerce.reviews.length  - review.travlerRating.comfortability) / (commerce.reviews.length - 1 ))
      commerce.generalDetailRating.atmosphere = ( commerce.reviews.length - 1 == 0 ) ? 0 :  Math.round((commerce.generalDetailRating.atmosphere * commerce.reviews.length - review.travlerRating.atmosphere) / (commerce.reviews.length - 1) )
    }
    await this.reviewService.remove(review._id , review.user)
    await this.BaseCommerceModel.findByIdAndUpdate(
      review.reviewed,
      commerce,
    );
    return review
  }

  async removeImage(id, idx) {
    const commerce = await this.BaseCommerceModel.findById(id);
    commerce.images.splice(idx, 1);
    return await this.BaseCommerceModel.findByIdAndUpdate(
      commerce._id,
      commerce,
    );
  }

  private async updateDynamic(type, entity) {
    switch (type) {
      case CommerceType.Bar: {
        return await this.barService.update(entity);
      }
      case CommerceType.Cafe: {
        return await this.cafeService.update(entity);
      }
      case CommerceType.GuestHouse: {
        return await this.guesthouseService.update(entity);
      }
      case CommerceType.Hotel: {
        return await this.hotelService.update(entity);
      }
      case CommerceType.JuiceShop: {
        return await this.juiceshopService.update(entity);
      }
      case CommerceType.JwajemShop: {
        return await this.jwajemshopService.update(entity);
      }
      case CommerceType.Shop: {
        return await this.shopService.update(entity);
      }
      case CommerceType.Restaurant: {
        return await this.restaurantService.update(entity);
      }
      case CommerceType.Landmark: {
        return await this.lanmarkService.update(entity);
      }
      case CommerceType.RoofTop: {
        return await this.rooftopService.update(entity);
      }
      case CommerceType.Mansion: {
        return await this.mansionService.update(entity);
      }
      case CommerceType.Activity: {
        return await this.activityService.update(entity);
      }
    }
  }

  async getProfile(id, type) {
    let profile;
    switch (type) {
      case CommerceType.Bar:
        {
          profile = await this.barService.findById(id);
        }
        break;
      case CommerceType.Cafe:
        {
          profile = await this.cafeService.findById(id);
        }
        break;
      case CommerceType.GuestHouse:
        {
          profile = await this.guesthouseService.findById(id);
        }
        break;
      case CommerceType.Hotel:
        {
          profile = await this.hotelService.findById(id);
        }
        break;
      case CommerceType.JuiceShop:
        {
          profile = await this.juiceshopService.findById(id);
        }
        break;
      case CommerceType.JwajemShop:
        {
          profile = await this.jwajemshopService.findById(id);
        }
        break;
      case CommerceType.Shop:
        {
          profile = await this.shopService.findById(id);
        }
        break;
      case CommerceType.Restaurant:
        {
          profile = await this.restaurantService.findById(id);
        }
        break;
      case CommerceType.Landmark:
        {
          profile = await this.lanmarkService.findById(id);
        }
        break;
      case CommerceType.RoofTop:
        {
          profile = await this.rooftopService.findById(id);
        }
        break;
      case CommerceType.Mansion:
        {
          profile = await this.mansionService.findById(id);
        }
        break;
      case CommerceType.Activity:
        {
          profile = await this.activityService.findById(id);
        }
        break;
    }
    return profile;
  }

  async addStories(info) {
    const commerce = await this.BaseCommerceModel.findById(info.commerceId);
    const profile = await this.getProfile(commerce.profile, commerce.type);
    if (profile.stories) {
      profile.stories = [...profile.stories, ...info.stories];
      await this.updateDynamic(commerce.type, profile);
      return this.BaseCommerceModel.findById(commerce._id);
    }
  }

  async addMenu(info) {
    const commerce = await this.BaseCommerceModel.findById(info.commerceId);
    const profile = await this.getProfile(commerce.profile, commerce.type);
    if (profile.menuRaw) {
      profile.menuRaw = [...profile.menuRaw, ...info.menu];
      await this.updateDynamic(commerce.type, profile);
      return this.BaseCommerceModel.findById(commerce._id);
    }
  }

  async addIncludes(include) {
    const commerce = await this.BaseCommerceModel.findById(include.commerceId);
    if (commerce.type != CommerceType.Shop) {
      const profile = await this.getProfile(commerce.profile, commerce.type);
      profile.includes.push(include.addition);
      await this.updateDynamic(commerce.type, profile);
      return this.BaseCommerceModel.findById(commerce._id);
    }
    return new HttpException(" the Shop doesn't have includes ", 400);
  }

  async addPayments(include) {
    const commerce = await this.BaseCommerceModel.findById(include.commerceId);
    if (commerce.type != CommerceType.Shop) {
      const profile = await this.getProfile(commerce.profile, commerce.type);
      profile.payments.push(include.addition);
      await this.updateDynamic(commerce.type, profile);
      return this.BaseCommerceModel.findById(commerce._id);
    }
    return new HttpException(" the Shop doesn't have includes ", 400);
  }

  async search(searchParams) {
    return this.BaseCommerceModel.find({ 
      name:  { $regex: searchParams.name ? new RegExp("" + searchParams.name.toLowerCase().replace(' ','|') + "", "i") : /.*/ }, 
      type: searchParams.category || /.*/ })
      .sort({ updatedAt: -1 })
      .skip(searchParams.start)
      .limit(searchParams.limit)
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: ['menu', 'rooms'] });
  }

  async discoverSearch(searchParams) {
    return this.BaseCommerceModel.find({ name: { $regex: searchParams.name ? new RegExp("" + searchParams.name.toLowerCase().replace(' ','|') + "", "i") : /.*/, }, type: searchParams.category || /.*/, collectionType: CollectionType.Discover })
      .sort({ updatedAt: -1 })
      .skip(searchParams.start)
      .limit(searchParams.limit)
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: ['menu', 'rooms'] });
  }

  async businessSearch(searchParams) {
    return this.BaseCommerceModel.find({ name: { $regex: searchParams.name ? new RegExp("" + searchParams.name.toLowerCase().replace(' ','|') + "", "i") : /.*/, }, type: searchParams.category || /.*/, collectionType: CollectionType.Business })
      .sort({ updatedAt: -1 })
      .skip(searchParams.start)
      .limit(searchParams.limit)
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: ['menu', 'rooms'] });
  }

  allDiscover() {
    return this.BaseCommerceModel.find({ collectionType: CollectionType.Discover })
      .populate({ path: 'reviews', populate: ['user'] })
      .populate({ path: 'profile', populate: ['menu', 'rooms'] });
  }

  async addTargetImage(id, image) {
    const path = join(process.cwd(), `uploads/targetImages`)
    const name = '/' + id + extname(image.url)
    try {
      renameSync(path + image.url, path + name);
    } catch (e) {
      console.log(e)
    }
    image.url = name
    const commerce =  await this.BaseCommerceModel.findByIdAndUpdate(id, { targetImage: image })
    this.createImageDatabase()
    return commerce
  }

  async createImageDatabase() {
    exec(`~/arcore/tools/arcoreimg/linux/arcoreimg build-db --input_images_directory=${join(process.cwd(), 'uploads/targetImages')} --output_db_path=${'uploads/database.imgdb'}`);
  }

}

import { forwardRef, Module } from '@nestjs/common';
import { CommerceService } from './commerce.service';
import { CommerceResolver } from './commerce.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Bar, BarSchema } from './entities/profiles/bar.entity';
import {
  Restaurant,
  RestaurantSchema,
} from './entities/profiles/restaurant.entity';
import { Hotel, HotelSchema } from './entities/profiles/hotel.entity';
import {
  GuestHouse,
  GuestHouseSchema,
} from './entities/profiles/guesthouse.entity';
import { Shop, ShopSchema } from './entities/profiles/shop.entity';
import {
  JwajemShop,
  JwajemShopSchema,
} from './entities/profiles/jwajemshop.entity';
import {
  JuiceShop,
  JuiceShopSchema,
} from './entities/profiles/juiceshop.entity';
import { Commerce, CommerceSchema } from './entities/base-commerce.entity';
import { RestaurantService } from './services/restaurant.service';
import { BarService } from './services/bar.service';
import { CafeService } from './services/cafe.service';
import { HotelService } from './services/hotel.service';
import { GuesthouseService } from './services/guesthouse.service';
import { JwajemshopService } from './services/jwajemshop.service';
import { JuiceshopService } from './services/juiceshop.service';
import { ShopService } from './services/shop.service';
import { Cafe, CafeSchema } from './entities/profiles/cafe.entity';
import { Dish, DishSchema } from './entities/items/dish.entity';
import { ReviewModule } from 'src/review/review.module';
import {
  DishCategory,
  DishCategorySchema,
} from './entities/items/category.entity';
import { DishCategoryService } from './services/dish-category.service';
import { RestaurantResolver } from './resolvers/restaurant.resolver';
import { ShopResolver } from './resolvers/shop.resolver';
import { BarResolver } from './resolvers/bar.resolver';
import { HotelResolver } from './resolvers/hotel.resolver';
import { CafeResolver } from './resolvers/cafe.resolver';
import { GuesthouseResolver } from './resolvers/guesthouse.resolver';
import { JuiceshopResolver } from './resolvers/juiceshop.resolver';
import { JawjemshopResolver } from './resolvers/jawjemshop.resolver';
import { Drink, DrinkSchema } from './entities/items/drink.entity';
import { Room, RoomSchema } from './entities/items/room.entity';
import { RoofTop, RoofTopSchema } from './entities/profiles/rooftop.entity';
import { Activity, ActivitySchema } from './entities/profiles/activity.entity';
import { Mansion, MansionSchema } from './entities/profiles/mansion.entity';
import { Landmark, LandmarkSchema } from './entities/profiles/landmark.entity';
import { MansionService } from './services/mansion.service';
import { RooftopService } from './services/rooftop.service';
import { ActivityService } from './services/activity.service';
import { LandmarkService } from './services/landmark.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      // commerce informations
      { name: Commerce.name, schema: CommerceSchema },
      // commerce profile
      { name: Cafe.name, schema: CafeSchema },
      { name: Bar.name, schema: BarSchema },
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Hotel.name, schema: HotelSchema },
      { name: GuestHouse.name, schema: GuestHouseSchema },
      { name: Shop.name, schema: ShopSchema },
      { name: JwajemShop.name, schema: JwajemShopSchema },
      { name: JuiceShop.name, schema: JuiceShopSchema },
      { name: Mansion.name, schema: MansionSchema },
      { name: RoofTop.name, schema: RoofTopSchema },
      { name: Activity.name, schema: ActivitySchema },
      { name: Landmark.name, schema: LandmarkSchema },
      // commerce items
      { name: Dish.name, schema: DishSchema },
      { name: Room.name, schema: RoomSchema },
      { name: Drink.name, schema: DrinkSchema },
      { name: DishCategory.name, schema: DishCategorySchema },
    ]),
    forwardRef(() => ReviewModule),
  ],
  providers: [
    CommerceResolver,
    CommerceService,
    MansionService,
    RooftopService,
    ActivityService,
    LandmarkService,
    RestaurantService,
    BarService,
    CafeService,
    HotelService,
    DishCategoryService,
    GuesthouseService,
    JwajemshopService,
    JuiceshopService,
    ShopService,
    RestaurantResolver,
    ShopResolver,
    BarResolver,
    HotelResolver,
    CafeResolver,
    GuesthouseResolver,
    JuiceshopResolver,
    JawjemshopResolver,
  ],
  exports: [
    MansionService,
    RooftopService,
    ActivityService,
    LandmarkService,
    CommerceService,
    RestaurantService,
    BarService,
    CafeService,
    HotelService,
    GuesthouseService,
    JwajemshopService,
    JuiceshopService,
    ShopService,
    DishCategoryService,
  ],
})
export class BaseCommerceModule {}

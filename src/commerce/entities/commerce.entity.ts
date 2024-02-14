import {
  ObjectType,
  Field,
  createUnionType,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Bar } from './profiles/bar.entity';
import { Cafe } from './profiles/cafe.entity';
import { GuestHouse } from './profiles/guesthouse.entity';
import { Hotel } from './profiles/hotel.entity';
import { JuiceShop } from './profiles/juiceshop.entity';
import { JwajemShop } from './profiles/jwajemshop.entity';
import { Restaurant } from './profiles/restaurant.entity';
import { Shop } from './profiles/shop.entity';
import { File } from 'src/utils/file.schema';
import { CommerceType } from './commerce.enum';
import { Landmark } from './profiles/landmark.entity';
import { Mansion } from './profiles/mansion.entity';
import { Activity } from './profiles/activity.entity';
import { RoofTop } from './profiles/rooftop.entity';

@ObjectType()
export class OpeningTime {
  @Field(() => Date)
  startTime: Date;

  @Field(() => String)
  startDay: string;

  @Field(() => Date)
  endtTime: Date;

  @Field(() => String)
  endtDay: string;
}

export const Profile = createUnionType({
  name: 'Profile',
  types: () => [
    Restaurant,
    Bar,
    Cafe,
    GuestHouse,
    Hotel,
    JuiceShop,
    JwajemShop,
    Shop,
    Landmark,
    Mansion,
    Activity,
    RoofTop
  ],
  resolveType(value) {
    const profile = value[0] || value;
    switch (profile.ObjecType) {
      case CommerceType.Restaurant:
        return Restaurant;
      case CommerceType.Bar:
        return Bar;
      case CommerceType.Cafe:
        return Cafe;
      case CommerceType.GuestHouse:
        return GuestHouse;
      case CommerceType.Hotel:
        return Hotel;
      case CommerceType.JuiceShop:
        return JuiceShop;
      case CommerceType.JwajemShop:
        return JwajemShop;
      case CommerceType.RoofTop:
        return RoofTop;
      case CommerceType.Mansion:
        return Mansion;
      case CommerceType.Activity:
        return Activity;
      case CommerceType.Landmark:
        return Landmark;
      case CommerceType.Shop:
        return Shop;
      default:
        return null;
    }
  },


});

@ObjectType()
export class Postion {
  @Field(() => Float)
  longitude: number;

  @Field(() => Float)
  latitude: number;
}

@ObjectType()
export class Addition {
  @Field(() => String)
  name: string;

  @Field(() => File)
  icon: File;
}

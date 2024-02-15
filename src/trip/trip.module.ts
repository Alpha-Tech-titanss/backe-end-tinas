import { forwardRef, Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripResolver } from './trip.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Chapter, ChapterSchema } from './entities/chapter.entity';
import { Place, PlaceSchema } from './entities/place.entity';
import { Trip, TripSchema } from './entities/trip.entity';
import { BundleModule } from 'src/bundle/bundle.module';
import { AccessCode, AccessCodeSchema } from './entities/access-code.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    MongooseModule.forFeature([
      { name: Chapter.name, schema: ChapterSchema },
      { name: Place.name, schema: PlaceSchema },
      { name: Trip.name, schema: TripSchema },
      { name: AccessCode.name, schema: AccessCodeSchema },
    ]),
    forwardRef(() => BundleModule),
  ],
  providers: [TripResolver, TripService],
  exports: [TripService],
})
export class TripModule { }

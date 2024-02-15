import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsResolver } from './stats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Stat, StatSchema } from './entities/stat.entity';
import { Track, TrackSchema } from './entities/track.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Stat.name, schema: StatSchema },
      { name: Track.name, schema: TrackSchema },
    ]),
  ],
  providers: [StatsResolver, StatsService],
})
export class StatsModule {}

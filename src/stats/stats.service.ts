import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateStatInput } from './dto/update-stat.input';
import { Stat } from './entities/stat.entity';
import { Track } from './entities/track.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(Stat.name) private StatModel: Model<Stat>,
    @InjectModel(Track.name) private TrackModel: Model<Track>,
  ) {}

  findAll() {
    return this.StatModel.find();
  }

  async findOne(id: string) {
    const stat = await this.StatModel.findOne({ user: id });
    if (stat) {
      return stat;
    }
    return await this.StatModel.create({ user: id });
  }

  async track(userId: string, updateStatInput: UpdateStatInput) {
    const stat = await this.findOne(userId);
    stat.tracks.push((await this.TrackModel.create(updateStatInput))._id);
    return this.StatModel.findByIdAndUpdate(stat._id, stat);
  }
}

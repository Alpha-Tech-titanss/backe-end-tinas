import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ChapterProgress, Progress } from './entities/progress.entity';

@Injectable()
export class ProgressService {
  
  constructor(
    @InjectModel(Progress.name) private ProgressModel: Model<Progress>,
    @InjectModel(ChapterProgress.name) public ChapterProgressModel: Model<ChapterProgress>,
  ) {}

  async create(createProgressInput) {
    return await (new this.ProgressModel(createProgressInput)).save()
  }

  findAll() {
    return `This action returns all progress`;
  }

  findByUserAndTrip( userId , tripId ) {
    return this.ProgressModel.findOne({ userId , trip: Types.ObjectId(tripId) })
  }

  update(id , progress) {
    return this.ProgressModel.findByIdAndUpdate(id , progress)
  }

  remove(id: number) {
    return `This action removes a #${id} progress`;
  }

  async getPlaceStatus( userId , tripId , placeId ) {
    const progress = await this.findByUserAndTrip(userId,tripId)
    if ( progress ) {      
      return { id: placeId, status: progress.placesId.includes(placeId) }
    }
  }
}

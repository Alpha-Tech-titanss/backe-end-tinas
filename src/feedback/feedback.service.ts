import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {

  constructor(
    @InjectModel(Feedback.name) private FeedbackModel: Model<Feedback>,
    private userService: UserService
  ) {}

  async create(createFeedbackInput: CreateFeedbackInput) {
    return await new this.FeedbackModel(createFeedbackInput).save()
  }

  async findAll() {
    return await this.FeedbackModel.find().populate(['reporter'])
  }

  async findOne(id: string) {
    return await this.FeedbackModel.findOne({ id: id }).populate(['reporter'])
  }

  async update(id, updateReportInput) {
    //return await this.ReportModel.findOneAndUpdate({ id: id },UpdateReportInput)
  }

  async remove(id: string) {
    return await this.FeedbackModel.findOneAndRemove({ id: id }).populate(['reporter'])
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review.name) private ReviewModel: Model<Review>) { }

  async create(createReviewInput) {
    return await new this.ReviewModel(createReviewInput).save();
  }

  findAll() {
    return `This action returns all review`;
  }

  findOne(id) {
    return this.ReviewModel.findById(id)
  }

  async update(id, feedback, userId) {
    const review = await this.ReviewModel.findById(id)
    if (review && review.user == userId) {
      return await this.ReviewModel.findByIdAndUpdate(id, { ...review, feedback })
    }
  }

  async remove(id, userId) {
    const review = await this.ReviewModel.findById(id)
    if (review && review.user == userId) {
      return await this.ReviewModel.findByIdAndRemove(id)
    }
    return new HttpException(' you don\'t own this review', 400)
  }
}

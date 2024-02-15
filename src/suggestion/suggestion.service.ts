import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from 'src/commerce/commerce.service';
import { Suggestion } from './entities/suggestion.entity';

@Injectable()
export class SuggestionService {

    constructor(
        @InjectModel(Suggestion.name) private SuggestionModel: Model<Suggestion>,
        private readonly commerceService: CommerceService,
    ) {}

    async create( input ) {
        const suggestions = await this.SuggestionModel.find({ startTime: { $gte: input.startTime } , endTime: { $lte: input.endTime } })
        if (suggestions.length == 0 ) {
            return await ( new this.SuggestionModel(input)).save()
        }
        throw new HttpException(' Time reserved ', 400)
    }


    delete( id ) {
        return this.SuggestionModel.findByIdAndRemove(id)
    }

    getSuggestions () {
        const now = new Date('2021-12-30')
        return this.SuggestionModel.findOne({ startTime: { $lte: now } , endTime: { $gte: now } }).populate({ path:'commerces' , populate: { path: 'profile' , populate: ['rooms','menu','drinks']  }})
    }

}

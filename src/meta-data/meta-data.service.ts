import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Country } from "./entities/country.entity";
@Injectable()
export class MetaDataService {
  constructor(
    @InjectModel(Country.name) private CountryModel: Model<Country>
  ) {}

  findAll() {
    return this.CountryModel.find();
  }
}

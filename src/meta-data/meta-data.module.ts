import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Country, CountrySchema } from "./entities/country.entity";
import { MetaDataResolver } from "./meta-data.resolver";
import { MetaDataService } from "./meta-data.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Country.name, schema: CountrySchema },
      
    ]),
  ],
  providers: [MetaDataResolver, MetaDataService],
})
export class MetaDataModule {}

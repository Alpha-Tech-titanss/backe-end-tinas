import { Query, Resolver } from "@nestjs/graphql";
import { Country } from "./entities/country.entity";
import { MetaDataService } from "./meta-data.service";

@Resolver(() => Country)
export class MetaDataResolver {
  constructor(private readonly metaDataService: MetaDataService) {}

  @Query(() => [Country], { name: "countries" })
  findAll() {
    return this.metaDataService.findAll();
  }
}

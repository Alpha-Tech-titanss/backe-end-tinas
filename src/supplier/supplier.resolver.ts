import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SupplierInput } from "./dto/create-supplier.input";
import { Supplier } from "./entities/supplier.entity";
import { SupplierService } from "./supplier.service";

@Resolver(() => Supplier)
export class SupplierResolver {
  constructor(private readonly supplierService: SupplierService) {}

  @Mutation(() => Supplier)
  createSupplier(@Args("supplierInput") supplierInput: SupplierInput) {
    return this.supplierService.createSupplier(supplierInput);
  }

  @Query(() => [Supplier], { name: "supplier" })
  findAll() {
    return this.supplierService.findAll();
  }
}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Supplier, SupplierSchema } from "../supplier/entities/supplier.entity";
import { SupplierResolver } from "./supplier.resolver";
import { SupplierService } from "./supplier.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplier.name, schema: SupplierSchema },
    ]),
  ],
  providers: [SupplierResolver, SupplierService],
  exports: [SupplierService],
})
export class SupplierModule {}

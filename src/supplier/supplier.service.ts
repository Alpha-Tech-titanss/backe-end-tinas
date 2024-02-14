import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SupplierInput } from "./dto/create-supplier.input";
import { Supplier } from "./entities/supplier.entity";
@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(Supplier.name) private SupplierModel: Model<Supplier>
  ) {}

  createSupplier(supplierInput: SupplierInput) {
    return new this.SupplierModel(supplierInput).save();
  }

  findAll() {
    return this.SupplierModel.find();
  }

  async validateSuppliers(suppliers: String[]) {
    for (const supplier of suppliers) {
      const found = await this.SupplierModel.find({ _id: supplier });
      if (!found.length)
        throw new NotFoundException(`Supplier with id=${supplier} not found`);
    }
    return true;
  }
}

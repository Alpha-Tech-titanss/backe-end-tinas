import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateBundleInput } from './dto/update-bundle.input';
import { Bundle } from './entities/bundle.entity';
import { Filter } from './entities/filter.entity';
import * as TModel from './entities/model.entity';
import { ModelViewer } from './entities/modelViewer.entity';

@Injectable()
export class BundleService {
  
  constructor(
    @InjectModel(Bundle.name) private BundleModel: Model<Bundle>,
    @InjectModel(Filter.name) private FilterModel: Model<Filter>,
    @InjectModel(TModel.Model.name) private TmodelModel: Model<TModel.Model>,
    @InjectModel(ModelViewer.name) private ModelViewerModel: Model<ModelViewer>
  ) {}

  createBundle(bundle) {
    return (new this.BundleModel(bundle)).save();
  }

  createFilter(filter) {
    return (new this.FilterModel(filter)).save();
  }

  createModel(model) {
    return (new this.TmodelModel(model)).save();
  }

  createModelViewer(ModelViewer) {
    return (new this.ModelViewerModel(ModelViewer)).save();
  }

  findAllBundles() {
    return this.BundleModel.find()
  }

  findAllModelViewers() {
    return this.ModelViewerModel.find()
  }

  findAllFilters() {
    return this.FilterModel.find()
  }

  findAllModels() {
    return this.TmodelModel.find()
  }

  findOneBundle(id: string) {
    return this.BundleModel.findById(id)
  }

  findOneModelViewer(id: string) {
    return this.ModelViewerModel.findById(id)
  }

  findOneFilter(id: string) {
    return this.FilterModel.findById(id)
  }

  findOneModel(id: string) {
    return this.TmodelModel.findById(id)
  }

  update(id: number, updateBundleInput: UpdateBundleInput) {
    return `This action updates a #${id} bundle`;
  }

  remove(id: number) {
    return `This action removes a #${id} bundle`;
  }

  compile() {}
}

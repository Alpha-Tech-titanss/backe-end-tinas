import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BundleService } from './bundle.service';
import { Bundle } from './entities/bundle.entity';
import { CreateBundleInput } from './dto/create-bundle.input';
import { UpdateBundleInput } from './dto/update-bundle.input';
import { UseInterceptors } from '@nestjs/common';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { UploadMedia } from 'src/utils/file.schema';
import { Filter } from './entities/filter.entity';
import { Model } from './entities/model.entity';
import { CreateModelInput } from './dto/create-model.input';
import { CreateFilterInput } from './dto/create-filter.input';
import { CreateModelViewerInput } from './dto/create-modelViewer.input';
import { ModelViewer } from './entities/modelViewer.entity';

@Resolver(() => Bundle)
export class BundleResolver {
  constructor(private readonly bundleService: BundleService) {}

  @Mutation(() => Bundle)
  createBundle(@Args('createBundleInput') createBundleInput: CreateBundleInput) {
    return this.bundleService.createBundle(createBundleInput);
  }

  @Query(() => [Bundle], { name: 'bundle' })
  findAllBundle() {
    return this.bundleService.findAllBundles();
  }

  @Query(() => Bundle, { name: 'bundle' })
  findOneBundle(@Args('id', { type: () => String }) id: string) {
    return this.bundleService.findOneBundle(id);
  }

  @Mutation(() => Filter)
  createFilter(@Args('createFilterInput') createFilterInput: CreateFilterInput) {
    return this.bundleService.createFilter(createFilterInput);
  }

  @Query(() => [Filter], { name: 'filters' })
  findAllFilter() {
    return this.bundleService.findAllFilters();
  }

  @Query(() => Filter, { name: 'filter' })
  findOneFilter(@Args('id', { type: () => String }) id: string) {
    return this.bundleService.findOneFilter(id);
  }

  @UseInterceptors(GraphqlFiles(['createModelInput.file']))
  @Mutation(() => Model)
  createModel(@Args('createModelInput') createModelInput: CreateModelInput) {
    return this.bundleService.createModel(createModelInput);
  }

  @Query(() => [Model], { name: 'models' })
  findAllModel() {
    return this.bundleService.findAllModels();
  }

  @Query(() => Model, { name: 'model' })
  findOneModel(@Args('id', { type: () => String }) id: string) {
    return this.bundleService.findOneModel(id);
  }

  @UseInterceptors(GraphqlFiles(['createModelViewerInput.file']))
  @Mutation(() => ModelViewer)
  createModelViewer(@Args('createModelViewerInput') createModelViewerInput: CreateModelViewerInput) {
    return this.bundleService.createModelViewer(createModelViewerInput);
  }

  @Query(() => [ModelViewer], { name: 'modelViewers' })
  findAllModelViewer() {
    return this.bundleService.findAllModelViewers();
  }

  @Query(() => ModelViewer, { name: 'modelViewer' })
  findOneModelViewer(@Args('id', { type: () => String }) id: string) {
    return this.bundleService.findOneModelViewer(id);
  }

  @Mutation(() => Bundle)
  updateBundle(@Args('updateBundleInput') updateBundleInput: UpdateBundleInput) {
    return this.bundleService.update(updateBundleInput.id, updateBundleInput);
  }

  @Mutation(() => Bundle)
  removeBundle(@Args('id', { type: () => Int }) id: number) {
    return this.bundleService.remove(id);
  }

  @UseInterceptors(GraphqlFiles(['bundle']))
  @Mutation(() => Boolean)
  async uploadBundle(@Args('bundle', { type: () => UploadMedia }) files) {
    return true;
  }
}

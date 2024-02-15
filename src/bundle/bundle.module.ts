import { Module } from '@nestjs/common';
import { BundleService } from './bundle.service';
import { BundleResolver } from './bundle.resolver';
import { Bundle, BundleSchema } from './entities/bundle.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Filter, FilterSchema } from './entities/filter.entity';
import { Model, ModelSchema } from './entities/model.entity';
import { ModelViewer, ModelViewerSchema } from './entities/modelViewer.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bundle.name, schema: BundleSchema },
      { name: Filter.name, schema: FilterSchema },
      { name: Model.name, schema: ModelSchema },
      { name: ModelViewer.name, schema: ModelViewerSchema }
    ]),
  ],
  exports: [BundleService],
  providers: [BundleResolver, BundleService],
})
export class BundleModule {}

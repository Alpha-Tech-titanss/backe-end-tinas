import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripModule } from 'src/trip/trip.module';
import { DefaultConfigResolver } from './default-config.resolver';
import { DefaultConfigService } from './default-config.service';
import { DefaultConfig, DefaultConfigSchema } from './entities/default-config.entity';

@Module({
  imports: [
    forwardRef(() => TripModule),
    MongooseModule.forFeature([
      { name: DefaultConfig.name, schema: DefaultConfigSchema },

    ]),
  ],
  providers: [DefaultConfigResolver, DefaultConfigService],
  exports: [DefaultConfigService]
})

export class DefaultConfigModule { }

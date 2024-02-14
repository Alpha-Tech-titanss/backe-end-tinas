import { Module } from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { AdministrationResolver } from './administration.resolver';

@Module({
  providers: [AdministrationResolver, AdministrationService],
})

export class AdministrationModule {}

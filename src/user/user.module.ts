import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from 'src/notification/notification.module';
import { TripModule } from 'src/trip/trip.module';
import { ProgressModule } from 'src/progress/progress.module';
import { DefaultConfig, DefaultConfigSchema } from 'src/default-config/entities/default-config.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: DefaultConfig.name, schema: DefaultConfigSchema }]),
    forwardRef(() => NotificationModule),
    forwardRef(() => TripModule),
    forwardRef(() => ProgressModule),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule { }

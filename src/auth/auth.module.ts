import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
// import { FacebookStrategy } from './strategies/facebook.strategy';
// import { GoogleStrategy } from './strategies/google.strategy';
import { UserModule } from 'src/user/user.module';
//import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthenticationResolver } from './auth.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { FacebookTokenStrategy } from './strategies/facebookToken.strategy';
// import { GoogleTokenStrategy } from './strategies/googleToken.strategy';

@Module({
  imports: [
    forwardRef(() => PassportModule),
    forwardRef(() => UserModule),
    // JwtModule.register({
    //   secret: "demo_key_for_learning_purpose_only" ,
    //   signOptions: { expiresIn: '2d' }   
    // })
    
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: '2d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthenticationResolver,
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}

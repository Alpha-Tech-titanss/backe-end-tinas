import { Injectable } from '@nestjs/common';
//import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    //private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: /*configService.get<string>('0auth.facebook.clientID')*/'',
      clientSecret: /*configService.get<string>('0auth.facebook.clientSecret')*/ '',
      callbackURL: /*configService.get<string>('0auth.facebook.callbackURL')*/'',
      scope: ['email', 'public_profile'],
      profileFields: ['emails', 'name', 'picture'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails } = profile;
    console.log(profile);
    const user = {
      email: emails[0].value,
      /*name,
            picture*/
    };
    const payload = {
      user,
      accessToken,
    };
    console.log(payload);
    await this.authService.register(user);
    done(null, payload);
  }
}

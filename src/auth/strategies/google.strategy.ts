import { Injectable } from '@nestjs/common';
//import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    //private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: 'http://529128748625-kp8uv1cf1kaen3rp9rnnqnv63uhi76vf.apps.googleusercontent.com/',
      clientSecret: 'tyckGl5UqELbxF6xluNiUd-F',
      // callbackURL: /*configService.get<string>('0auth.google.callbackURL')*/"",
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/user.phonenumbers.read',
        'profile',
        'email',
      ],
      profileFields: ['emails', 'name', 'phonenumbers', 'displayName'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails, picture, displayName } = profile;
    console.log(profile);
    const user = {
      email: emails[0].value,
      username: displayName,
      picture,
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

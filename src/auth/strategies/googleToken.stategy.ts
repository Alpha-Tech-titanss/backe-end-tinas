import { Injectable } from '@nestjs/common';
//import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
const Strategy = require('passport-google-id-token');
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleTokenStrategy extends PassportStrategy(
  Strategy,
  'google-id-token',
) {
  constructor(
    //private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: '529128748625-kp8uv1cf1kaen3rp9rnnqnv63uhi76vf.apps.googleusercontent.com',
      clientSecret: 'tyckGl5UqELbxF6xluNiUd-F',
      callbackURL: "https://90db-39-60-245-139.in.ngrok.io/auth/google/callback",
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
    data: any,
    profile: any,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, email, picture } = data.payload;
    const user = {
      email,
      username: name,
      picture: { name: 'Profile picture', type: 'External', url: picture },
      EmailConfirmation: true,
    };
    const payload = {
      user: (await this.authService.register(user)).toJSON(),
    };
    done(null, payload);
  }
}
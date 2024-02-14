import { Injectable } from '@nestjs/common';
//import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook-token-nest';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookTokenStrategy extends PassportStrategy(
  Strategy,
  'facebook-token',
) {
  constructor(
    //private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: /*configService.get<string>('0auth.facebook.clientID')*/'',
      clientSecret: /*configService.get<string>('0auth.facebook.clientSecret')*/'',
      fbGraphVersion: 'v12.0',
    });
  }

  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    const { id, photos, emails, displayName } = profile;
    const user = {
      email: emails[0].value || id ,
      username: displayName,
      picture: {
        name: 'Profile picture',
        type: 'External',
        url: photos[0].value,
      },
      EmailConfirmation: true,
    };
    console.log(profile);
    const payload = {
      user: (await this.authService.register(user)).toJSON(),
    };
    done(null, payload);
  }
}
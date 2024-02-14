import { Strategy } from "@arendajaelu/nestjs-passport-apple";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
const fs = require("fs");

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy, "apple") {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
    private jwtService: JwtService
  ) {
    super({
      clientID: configService.get<string>("auth.apple.clientID"),
      teamID: configService.get<string>("auth.apple.teamID"),
      keyID: configService.get<string>("auth.apple.keyID"),
      keyFilePath: "./AuthKey_YP3V9VY8D9.p8",
      callbackURL: "https://tynass.com/auth/apple/callback",
      passReqToCallback: false,
      scope: ["email", "name"],
    });
    console.log(configService.get("auth.apple.clientID"));
    console.log(configService.get("auth.apple.teamID"));
    console.log(configService.get("auth.apple.keyID"));
  }
}

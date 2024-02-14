import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { User } from "src/user/entities/user.entity";

export enum LoginType {
  facebook = "Facebook",
  google = "Google",
  local = "Local",
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async validateUserLocal(email, password) {
    const user = await this.userService.findByEmail(email);
    if (user && user.password != null) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return user;
      }
      return null;
    }
    return null;
  }

  async login(payload: any) {
    const userEntity: User = await this.userService.findByEmail(
      payload.user.email
    );
    // fix payload
    const { _id, email, username } = payload.user;
    return {
      token: this.jwtService.sign({ _id, email, username }),
      role: "none",
      user: userEntity,
    };
  }

  async register(informations: any) {
    const user = await this.userService.findByEmail(informations.email);
    if (user) {
      return await this.userService.update(user._id, informations);
    } else {
      return await this.userService.create(informations);
    }
  }
  async registerByIDtoken(payload: any) {
    if (payload.hasOwnProperty("id_token")) {
      let email,
        firstName,
        lastName = "";

      //You can decode the id_token which returned from Apple,
      const decodedObj = await this.jwtService.decode(payload.id_token);
      const accountId = decodedObj.sub || "";
      console.info(`Apple Account ID: ${accountId}`);

      //Email address
      if (decodedObj.hasOwnProperty("email")) {
        email = decodedObj["email"];
        console.info(`Apple Email: ${email}`);
      }

      //You can also extract the firstName and lastName from the user, but they are only shown in the first time.
      if (payload.hasOwnProperty("user")) {
        const userData = JSON.parse(payload.user);
        const { firstName, lastName } = userData.name || {};
      }

      //.... you logic for registration and login here
      const user = await this.userService.findByEmail(email);
      if (user) {
        return {
          token: this.jwtService.sign({ _id: user.id, email, username: email }),
          role: "none",
          user: user,
        };
      } else {
        return await this.userService.create({ username: email, email });
      }
    }
    throw new UnauthorizedException("Unauthorized");
  }
}

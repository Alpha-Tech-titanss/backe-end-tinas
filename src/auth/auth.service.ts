import { Injectable } from "@nestjs/common";
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
    const { _id, email, username, EmailConfirmation, banned } = payload.user;
    return {
      token: this.jwtService.sign({
        _id,
        email,
        username,
        emailConfirmation: EmailConfirmation,
        banned: banned,
      }),
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
}

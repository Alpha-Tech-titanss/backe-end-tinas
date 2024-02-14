import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("local/login")
  @UseGuards(AuthGuard("local"))
  localLogin(@Req() req) {
    return this.authService.login(req.user);
  }

  @Get("facebook/login")
  @UseGuards(AuthGuard("facebook"))
  facebookLogin() {}

  @Get("facebook/callback")
  @UseGuards(AuthGuard("facebook"))
  facebookCallback(@Req() req) {
    return this.authService.login(req.user);
  }

  @Get("google/login")
  @UseGuards(AuthGuard("google"))
  googleLogin() {}

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  googleCallback(@Req() req) {
    return this.authService.login(req.user);
  }

  @Get("facebook/token")
  @UseGuards(AuthGuard("facebook-token"))
  facebookToken(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post("google/token")
  @UseGuards(AuthGuard("google-id-token"))
  googleToken(@Req() req) {
    return this.authService.login(req.user);
  }

  @Get("apple/token")
  @UseGuards(AuthGuard("apple"))
  appleToken(@Req() req) {
    return HttpStatus.OK;
  }

  @Post("apple/callback")
  async redirect(@Body() payload): Promise<any> {
    console.log({ payload });
    if (payload.id_token) {
      return this.authService.registerByIDtoken(payload);
    }
    throw new UnauthorizedException("Unauthorized");
  }
}

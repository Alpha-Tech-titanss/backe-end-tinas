import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { AuthInfo, AuthResponse } from './inputs/login-user.input';
import { ActivateAuthGuard } from 'src/utils/guards/activation.guard';

@Resolver()
export class AuthenticationResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Mutation(() => AuthResponse, { nullable: true })
  async login(@Args('authInfo') authInfo: AuthInfo) {
    const user = await this.authService.validateUserLocal(
      authInfo.email,
      authInfo.password,
    );
    if (user) return await this.authService.login({ user: user.toJSON() });
    else return null;
  }

  @Mutation(() => User)
  // @UseInterceptors(GraphqlFiles(['informations.picture']))
  async signup(@Args('informations') createLocalUserInput: CreateUserInput) {
    return this.userService.create(createLocalUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Int)
  async sendConfirmationCode(
    @CurrentUser() user
  ) {
    return this.userService.sendConfirmationCode(user.id);
  }
  @UseGuards(ActivateAuthGuard)
  @Mutation(() => Int)
  async activateAccount(
    @CurrentUser() user,
    @Args('code', { type: () => String }) code: string,
  ) {
    return this.userService.activateAcount(user.id, code);
  }

  @Mutation(() => String)
  async refresh(@CurrentUser() user) {
    //return this.authService.refreshJwt(user)
  }
}

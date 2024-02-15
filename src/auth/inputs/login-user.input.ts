import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class AuthInfo {
  @IsEmail()
  @Field(() => String)
  email: string;

  @Length(8)
  @Field(() => String)
  password: string;
}

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  token: string;

  @Field(() => String)
  role: string;

  @Field(() => User)
  user: User;
}

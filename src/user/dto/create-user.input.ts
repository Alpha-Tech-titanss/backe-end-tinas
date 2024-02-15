import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { UploadMedia } from 'src/utils/file.schema';
//import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  //@IsEmail()
  @Field(() => String)
  email: string;

  //@Length(8)
  @Field(() => String)
  password: string;

  //@IsNotEmpty()
  @Field(() => String)
  username: string;

  //@IsNotEmpty()
  @Field(() => UploadMedia)
  picture;

  @Field(() => String,{nullable:true})
  @IsOptional()
  @IsUUID()
  selectedTripId:string;
}

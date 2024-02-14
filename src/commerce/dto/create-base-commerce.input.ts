import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';
import { UploadMedia } from 'src/utils/file.schema';
import { OpeningTime, Postion } from '../entities/commerce.entity';

@InputType()
export class CreateBaseCommerceInput {
  @Field(() => String, { description: "Commerce's name" })
  name;

  @Field(() => String, { description: "Commerce's description" })
  description;

  @Field(() => String, { description: "Commerce's telephone" })
  tel;

  @Field(() => String, { description: "Commerce's address" })
  address;

  @Field(() => String, { description: "Commerce's type", nullable: true })
  type;

  @Field(() => UploadMedia, { description: "Commerce's images" })
  images;

  @Field(() => OpeningTimeInput, { description: "Commerce's opening time" })
  openingTime;

  @Field(() => PositionInput, { description: "Commerce's postion" })
  position;

}

@InputType()
export class AdditionInput {
  @Field(() => String)
  name;

  @Field(() => UploadMedia)
  icon;
}

@InputType()
export class PositionInput {
  @Field(() => Float)
  longitude;

  @Field(() => Float)
  latitude;
}

@InputType()
export class OpeningTimeInput {
  @Field(() => Date)
  startTime;

  @Field(() => String)
  startDay;

  @Field(() => Date)
  endtTime;

  @Field(() => String)
  endtDay;
}

@InputType()
export class AddDishToResturant {
  @Field(() => String, { description: "Dish's resturantId" })
  restaurant;

  @Field(() => String, { description: "Dish's category" })
  category;

  @Field(() => String, { description: "Dish's name" })
  name;

  @Field(() => String, { description: "Dish's description" })
  description;

  @Field(() => UploadMedia, { description: "Dish's images" })
  images;

  @Field(() => Float, { description: "Dish's price" })
  price: number;
}

@InputType()
export class SearchParamsInput {

  @Field(() => String, { description: "Commerce's category" , nullable: true })
  category

  @Field(() => String, { description: "Commerce's name" , nullable: true })
  name

  @Field(() => Int, { description: "Commerce's start num" , defaultValue: 0 })
  start

  @Field(() => Int, { description: "Commerce's array limit" , defaultValue: 15 })
  limit

}


@InputType()
export class DishSearchParamsInput {

  @Field(() => String, { description: "Commerce's category" , nullable: true })
  category

  @Field(() => String, { description: "Commerce's name" , nullable: true })
  name

  @Field(() => Int, { description: "Commerce's start num" , defaultValue: 0 })
  start

  @Field(() => Int, { description: "Commerce's array limit" , defaultValue: 15 })
  limit

  @Field(() => Int, { description: "Commerce's start num" , defaultValue: 0 })
  min

  @Field(() => Int, { description: "Commerce's array limit" , defaultValue: 1000000 })
  max

}


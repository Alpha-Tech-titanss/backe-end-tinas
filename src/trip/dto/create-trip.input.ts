import { Field, Float, InputType } from '@nestjs/graphql';
import { Postion } from 'src/commerce/entities/commerce.entity';
import { UploadMedia } from 'src/utils/file.schema';

@InputType()
export class PostionInput  {
  @Field(() => Float)
  longitude: number;

  @Field(() => Float)
  latitude: number;
}

@InputType()
export class TripInput {

  @Field(() => String)
  name: string

  @Field(() => String)
  estimatedTime: string

  @Field(() => String)
  pricing: string
  @Field(() => Boolean,{description:'An optional field to mark trip as special',nullable:true})
  isSpecial: boolean

}

@InputType()
export class AddChapterInput {

  @Field(() => String)
  id

  @Field(() => ChapterInput)
  chapter
  
}


@InputType()
export class ChapterInput {

  @Field(() => UploadMedia)
  thumbnail

  @Field(() => String)
  name: string

  @Field(() => String)
  estimatedTime: string
  
}

@InputType()
export class BundleInput {

  @Field(() => String, { description: "Bundle's name" })
  sceneName: string;

  @Field(() => String, { description: "Bundle's description",  nullable: true  })
  description: string;
  
}

@InputType()
export class AddPlaceInput {

  @Field(() => String)
  id

  @Field(() => PlaceInput)
  place
  
  @Field(() => BundleInput)
  bundle

}

@InputType()
export class PlaceGalleryInput {

  @Field(() => String)
  id

  @Field(() => String)
  name

  @Field(() => UploadMedia, { description: "Place's images" })
  photos

}


@InputType()
export class PlaceInput {

  @Field(() => UploadMedia)
  thumbnail

  @Field(() => String)
  name: string

  @Field(() => PostionInput, { description: "Place's postion" })
  position: Postion;

  @Field(() => String)
  discription: string

  @Field(() => String)
  estimatedTime: string

  @Field(() => UploadMedia)
  audio

  @Field(() => String)
  bundle;
  
}

@InputType()
export class CreateAccessCodeInput {

  @Field(() => String)
  id

}

@InputType()
export class ApplyAccessCodeInput {

  @Field(() => String)
  id

  @Field(() => String)
  code

}
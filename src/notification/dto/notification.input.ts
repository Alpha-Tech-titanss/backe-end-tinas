import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class NotificationInput {

    @Field(() => String)
    title

    @Field(() => String)
    body

    @Field(() => String,{ nullable: true })
    image
}

@InputType()
export class NotificationCronInput {
    
    @Field(() => String)
    name

    @Field(() => String)
    cronTime

    @Field(() => NotificationInput)
    notification
}

@InputType()
export class NotificationUserInput {

    @Field(() => String)
    id

    @Field(() => NotificationInput)
    notification
}
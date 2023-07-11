import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePopupInput {
  @Field(() => String, { nullable: true })
  url: string | null;

  @Field(() => String, { nullable: true })
  link: string | null;

  @Field(() => Boolean, { defaultValue: true })
  up: boolean;
}

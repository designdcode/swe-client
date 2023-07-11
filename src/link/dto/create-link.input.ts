import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLinkInput {
  @Field(() => String, { nullable: true })
  url: string | null;

  @Field(() => String, { nullable: true })
  title: string | null;
}

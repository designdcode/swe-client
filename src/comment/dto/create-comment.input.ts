import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => String, { nullable: false })
  boardId: string;
}

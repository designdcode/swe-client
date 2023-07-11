import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
class AttachementInput {
  @Field((type) => String, { nullable: false })
  url: string;

  @Field((type) => String, { nullable: false })
  fileName: string;
}

@InputType()
export class CreateBoardInput {
  @Field((type) => String, { nullable: true })
  title: string | null;

  @Field((type) => String, { nullable: true })
  content: string | null;

  @Field((type) => String, { nullable: false })
  category: string;

  @Field((type) => String, { nullable: true })
  type: string | null;

  @Field((type) => String, { nullable: true })
  writer: string | null;

  @Field((type) => String, { nullable: true })
  link: string | null;

  @Field(() => [AttachementInput], { nullable: true })
  files?: AttachementInput[] | null;

  @Field(() => [AttachementInput], { nullable: true })
  images?: AttachementInput[] | null;

  @Field((type) => Boolean, { defaultValue: false })
  private: boolean;

  @Field((type) => Boolean, { defaultValue: true })
  showAttach: boolean;

  @Field(() => Date, { defaultValue: new Date() })
  inputCreatedAt: Date;
}

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FileInputType {
  @Field(() => String, { nullable: false })
  fileName: string;

  @Field(() => String, { nullable: false })
  filePath: string;
}

@InputType()
export class ChildrenInputType {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  label: string;
}

@InputType()
export class CreateFolderInput {
  @Field(() => String, { nullable: true })
  label?: string;

  @Field(() => String, { nullable: true })
  value?: string;

  @Field(() => [FileInputType], { nullable: true })
  files?: Record<string, any>[] | null;

  @Field(() => [ChildrenInputType], { nullable: true })
  children?: Record<string, any>[] | null;

  @Field(() => String, { nullable: true })
  parentId?: string | null;
}

import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { FileType, Folder } from '../entities/folder.entity';

@ObjectType()
export class FolderReturnType {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: false, defaultValue: '제목없음' })
  label: string;

  @Field(() => String, { nullable: false })
  value: string;

  @Field(() => String, { nullable: true })
  parentId?: string | null;

  @Field(() => [FileType], { nullable: true })
  files?: Record<string, string>[] | null;

  @Field(() => [Folder], { nullable: true })
  children?: Folder[] | null;

  @Field(() => Date)
  createdAt: Date;
}

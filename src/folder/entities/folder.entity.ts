import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLScalarType } from 'graphql';
import { Schema as MongooseSchema, Document } from 'mongoose';

export const FileScalar = new GraphQLScalarType({
  name: 'File',
  serialize(value: { fileName: string; filePath: string }) {
    return value;
  },
});

@ObjectType()
export class FileType {
  @Field(() => String, { nullable: false })
  fileName: string;

  @Field(() => String, { nullable: false })
  filePath: string;
}

@ObjectType()
export class ChildrenType {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: true })
  label: string;
}

@Schema()
class File extends Document {
  @Prop()
  fileName: string;

  @Prop()
  filePath: string;
}

const FileSchema = SchemaFactory.createForClass(File);

@Schema()
class Children extends Document {
  @Prop()
  _id: string;

  @Prop()
  label: string;
}

const ChildrenSchema = SchemaFactory.createForClass(Children);

@Schema()
@ObjectType()
export class Folder {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: false, defaultValue: '제목없음' })
  label: string;

  @Prop()
  @Field(() => String, { nullable: false })
  value: string;

  @Prop({ type: [FileSchema] })
  @Field(() => [FileType], { nullable: true })
  files?: Record<string, string>[] | null;

  @Prop()
  @Field(() => String, { nullable: true })
  parentId?: string | null;

  @Prop({ type: [ChildrenSchema] })
  @Field(() => [ChildrenType], { nullable: true })
  children?: Record<string, string>[] | null;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const FolderSchema = SchemaFactory.createForClass(Folder);

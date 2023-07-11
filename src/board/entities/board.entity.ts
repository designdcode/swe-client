import { Schema as MongooseSchema, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
class AttachmentType {
  @Field(() => String, { nullable: false })
  url: string;
  @Field((type) => String, { nullable: false })
  fileName: string;
}

@Schema()
class Attachment extends Document {
  @Prop()
  url: string;

  @Prop()
  fileName: string;
}

const AttachmentSchema = SchemaFactory.createForClass(Attachment);

@Schema()
@ObjectType()
export class Board {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: true })
  title: string | null;

  @Prop()
  @Field(() => String, { nullable: true })
  content: string | null;

  @Prop()
  @Field(() => String, { nullable: true })
  writer: string | null;

  @Prop()
  @Field(() => String, { nullable: false })
  category: string;

  @Prop()
  @Field(() => String, { nullable: true })
  type: string | null;

  @Prop()
  @Field(() => String, { nullable: true, defaultValue: null })
  link: string | null;

  @Prop()
  @Field(() => Boolean, { defaultValue: false })
  private: boolean;

  @Prop()
  @Field(() => Boolean, { defaultValue: true })
  showAttach: boolean;

  @Prop()
  @Field(() => Date, { nullable: true, defaultValue: new Date() })
  inputCreatedAt: Date | null;

  @Prop({ type: [AttachmentSchema] })
  @Field(() => [AttachmentType], { nullable: true })
  files?: Record<string, string>[] | null;

  @Prop({ type: [AttachmentSchema] })
  @Field(() => [AttachmentType], { nullable: true })
  images?: Record<string, string>[] | null;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const BoardSchema = SchemaFactory.createForClass(Board);

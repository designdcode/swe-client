import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class Popup {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: true })
  url: string;

  @Prop()
  @Field(() => String, { nullable: true })
  link: string;

  @Prop()
  @Field(() => Boolean, { defaultValue: true })
  up: boolean;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const PopupSchema = SchemaFactory.createForClass(Popup);

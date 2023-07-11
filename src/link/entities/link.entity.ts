import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class Link {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: false })
  title: string;

  @Prop()
  @Field(() => String, { nullable: false })
  url: string;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const LinkSchema = SchemaFactory.createForClass(Link);

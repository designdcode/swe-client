import { Schema as MongooseSchema } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Member {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  phoneNumber: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: true })
  job: string | null;

  @Field(() => String, { nullable: false, defaultValue: '' })
  department: string;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const MemberSchema = SchemaFactory.createForClass(Member);

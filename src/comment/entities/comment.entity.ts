import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Board } from '../../board/entities/board.entity';

@Schema()
@ObjectType()
export class Comment {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: false })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Board' })
  @Field(() => Board, { nullable: false })
  board: Board;

  @Prop()
  @Field(() => String, { nullable: false })
  boardId: string;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

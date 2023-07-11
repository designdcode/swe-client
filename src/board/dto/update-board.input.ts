import { CreateBoardInput } from './create-board.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  @Field(() => String)
  _id: string;
}

import { CreatePopupInput } from './create-popup.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePopupInput extends PartialType(CreatePopupInput) {
  @Field(() => String)
  _id: string;
}

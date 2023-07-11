import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Board } from '../../board/entities/board.entity';
import { Popup } from '../../popup/entities/popup.entity';

function ReturnResult<T>(itemType: Type<T>) {
  @ObjectType({ isAbstract: true })
  abstract class ReturnClass {
    @Field(() => [itemType])
    data: T[];

    @Field(() => Int)
    total: number;
  }
  return ReturnClass;
}

@ObjectType()
export class BoardReturnType extends ReturnResult(Board) {}

@ObjectType()
export class PopupReturnType extends ReturnResult(Popup) {}

import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Board } from '../../board/entities/board.entity';

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

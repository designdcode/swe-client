import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Board } from '../../board/entities/board.entity';
import { Popup } from '../../popup/entities/popup.entity';
import { Link } from '../../link/entities/link.entity';
import { Member } from '../../member/entities/member.entity';

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

@ObjectType()
export class LinkReturnType extends ReturnResult(Link) {}

@ObjectType()
export class MemberReturnType extends ReturnResult(Member) {}

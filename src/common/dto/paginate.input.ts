import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
class SortType {
  @Field(() => String, { nullable: false })
  field: string;

  @Field(() => String, { nullable: false })
  order: string;
}

@InputType()
export class PaginationArgs {
  @Field(() => Int)
  @Min(0)
  skip = 0;

  @Field(() => Int)
  @Min(1)
  @Max(50)
  take = 25;

  @Field(() => SortType, { nullable: true })
  sort?: Record<keyof SortType, string>;
}

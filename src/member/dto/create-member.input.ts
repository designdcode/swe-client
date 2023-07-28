import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMemberInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  phoneNumber: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { defaultValue: '' })
  job: string;

  @Field(() => String, { nullable: false })
  department: string;
}

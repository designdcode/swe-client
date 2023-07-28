import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { PaginationArgs } from '../common/dto/paginate.input';
import { MemberReturnType } from '../common/dto/returnType.dto';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation(() => Member)
  async createMember(@Args('args') args: CreateMemberInput): Promise<Member> {
    return await this.memberService.create(args);
  }

  @Query(() => MemberReturnType, { name: 'members' })
  async findAll(
    @Args('args', { nullable: true }) args?: PaginationArgs,
  ): Promise<MemberReturnType> {
    return await this.memberService.findAll(args);
  }

  @Query(() => Member, { name: 'member' })
  async findOne(
    @Args('_id', { type: () => String }) _id: string,
  ): Promise<Member> {
    return await this.memberService.findOne(_id);
  }

  @Mutation(() => Member)
  async updateMember(@Args('args') args: UpdateMemberInput): Promise<Member> {
    return await this.memberService.update(args);
  }

  @Mutation(() => Member)
  async removeMember(@Args('_id', { type: () => String }) _id: string) {
    return this.memberService.remove(_id);
  }
}

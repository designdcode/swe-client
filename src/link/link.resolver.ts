import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LinkService } from './link.service';
import { Link } from './entities/link.entity';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { PaginationArgs } from '../common/dto/paginate.input';
import { LinkReturnType } from '../common/dto/returnType.dto';

@Resolver(() => Link)
export class LinkResolver {
  constructor(private readonly linkService: LinkService) {}

  @Mutation(() => Link)
  async createLink(@Args('args') args: CreateLinkInput) {
    return await this.linkService.create(args);
  }

  @Query(() => LinkReturnType, { name: 'links' })
  async findAll(
    @Args('args', { nullable: true }) args?: PaginationArgs,
    @Args('category', { nullable: true }) category?: string,
  ): Promise<LinkReturnType> {
    return await this.linkService.findAll(args, category);
  }

  @Query(() => Link, { name: 'link' })
  async findOne(@Args('_id', { type: () => String }) _id: string) {
    return await this.linkService.findOne(_id);
  }

  @Mutation(() => Link)
  async updateLink(@Args('args') args: UpdateLinkInput) {
    return await this.linkService.update(args);
  }

  @Mutation(() => Link)
  async removeLink(@Args('_id', { type: () => String }) _id: string) {
    return await this.linkService.remove(_id);
  }
}

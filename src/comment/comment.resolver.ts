import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment)
  async createComment(@Args('args') args: CreateCommentInput) {
    return await this.commentService.create(args);
  }

  @Mutation(() => Comment)
  async updateComment(@Args('args') args: UpdateCommentInput) {
    return await this.commentService.update(args);
  }

  @Mutation(() => Comment)
  async removeComment(@Args('_id', { type: () => String }) _id: string) {
    return await this.commentService.remove(_id);
  }
}

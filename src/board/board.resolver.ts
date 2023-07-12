import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { BoardReturnType } from '../common/dto/returnType.dto';
import { PaginationArgs } from '../common/dto/paginate.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  async createBoard(@Args('args') args: CreateBoardInput) {
    return await this.boardService.create(args);
  }

  @Query(() => BoardReturnType, { name: 'boards' })
  async findAll(
    @Args('args', { nullable: true }) args?: PaginationArgs,
  ): Promise<BoardReturnType> {
    return await this.boardService.findAll(args);
  }

  @Query(() => Board, { name: 'board' })
  async findOne(
    @Args('_id', { type: () => String }) _id: string,
  ): Promise<Board> {
    return await this.boardService.findOne(_id);
  }

  @Mutation(() => Board)
  async updateBoard(@Args('args') args: UpdateBoardInput) {
    return await this.boardService.update(args);
  }

  @Mutation(() => Board)
  async removeBoard(@Args('_id', { type: () => String }) _id: string) {
    return await this.boardService.remove(_id);
  }
}

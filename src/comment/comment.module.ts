import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { BoardModule } from '../board/board.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './entities/comment.entity';
import { Board, BoardSchema } from '../board/entities/board.entity';
import { BoardService } from '../board/board.service';

@Module({
  imports: [
    BoardModule,
    MongooseModule.forFeature([
      {
        name: Comment.name,
        schema: CommentSchema,
      },
      {
        name: Board.name,
        schema: BoardSchema,
      },
    ]),
  ],
  providers: [CommentResolver, CommentService, BoardService],
})
export class CommentModule {}

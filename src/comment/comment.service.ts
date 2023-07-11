import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from '../board/entities/board.entity';
import { Model } from 'mongoose';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Board.name)
    private readonly boardModel: Model<Board>,
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
  ) {}

  async create(args: CreateCommentInput): Promise<Comment> {
    try {
      const { boardId, ...rest } = args;
      const board = await this.boardModel.findOne({ _id: boardId });
      const data = {
        ...rest,
        boardId,
        board,
      };
      const comment = new this.commentModel(data);
      board.comments.push(comment);
      board.save();
      return comment.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateCommentInput) {
    try {
      const { _id, ...rest } = args;
      return await this.commentModel.findOneAndUpdate(
        { _id },
        {
          $set: {
            ...rest,
          },
        },
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string) {
    try {
      return await this.commentModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

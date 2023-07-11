import { Injectable } from '@nestjs/common';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './entities/board.entity';
import { Model } from 'mongoose';
import { BoardReturnType } from '../common/dto/returnType.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel(Board.name) private readonly boardModel: Model<Board>,
  ) {}

  async create(args: CreateBoardInput) {
    try {
      const { files, images, ...rest } = args;
      const data = {
        ...rest,
        files: files ? JSON.parse(JSON.stringify(files)) : [],
        images: images ? JSON.parse(JSON.stringify(files)) : [],
      };
      const board = new this.boardModel(data);

      return board.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(category: string): Promise<BoardReturnType> {
    try {
      const boards = await this.boardModel.find(
        {
          category,
        },
        null,
      );

      return {
        data: boards,
        total: await this.boardModel.count({ category }),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Board> {
    try {
      const post = await this.boardModel.findById({
        _id,
      });
      return post;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateBoardInput): Promise<Board> {
    try {
      const { _id, ...rest } = args;
      const post = await this.boardModel.findByIdAndUpdate(_id, {
        $set: {
          ...rest,
        },
      });
      post.save();
      return post;
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string) {
    try {
      return await this.boardModel.findOneAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

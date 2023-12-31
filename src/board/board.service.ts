import { Injectable } from '@nestjs/common';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './entities/board.entity';
import { Model, SortOrder } from 'mongoose';
import { BoardReturnType } from '../common/dto/returnType.dto';
import { PaginationArgs } from '../common/dto/paginate.input';

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
        images: images ? JSON.parse(JSON.stringify(images)) : [],
      };
      const board = new this.boardModel(data);

      return board.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(args: PaginationArgs): Promise<BoardReturnType> {
    try {
      if (typeof args === 'undefined') {
        return {
          data: await this.boardModel.find().populate('comments'),
          total: await this.boardModel.count(),
        };
      }
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const boards = await this.boardModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions)
        .populate('comments');

      return {
        data: boards,
        total: await this.boardModel.count(),
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

  async incrementClicked(_id: string) {
    try {
      const board = await this.boardModel.findById({ _id });
      const Clicked = parseInt(board.clicked || '0', 10) + 1;

      return await this.boardModel.findByIdAndUpdate(_id, {
        $set: {
          clicked: Clicked,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

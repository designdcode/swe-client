import { Injectable } from '@nestjs/common';
import { CreateLinkInput } from './dto/create-link.input';
import { UpdateLinkInput } from './dto/update-link.input';
import { InjectModel } from '@nestjs/mongoose';
import { Link } from './entities/link.entity';
import { Model, SortOrder } from 'mongoose';
import { PaginationArgs } from '../common/dto/paginate.input';
import { LinkReturnType } from '../common/dto/returnType.dto';

@Injectable()
export class LinkService {
  constructor(
    @InjectModel(Link.name) private readonly linkModel: Model<Link>,
  ) {}
  async create(args: CreateLinkInput) {
    try {
      const popup = new this.linkModel(args);
      return popup;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(
    args: PaginationArgs,
    category: string,
  ): Promise<LinkReturnType> {
    try {
      if (typeof args === 'undefined') {
        return {
          data: await this.linkModel.find(),
          total: await this.linkModel.count(),
        };
      }
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const popups = await this.linkModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions);
      return {
        data: popups,
        total: await this.linkModel.count(),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Link> {
    try {
      const link = await this.linkModel.findById({ _id });
      return link;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateLinkInput) {
    try {
      const { _id, ...rest } = args;
      const link = await this.linkModel.findByIdAndUpdate(
        { _id },
        {
          $set: {
            ...rest,
          },
        },
      );
      return link.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string): Promise<Link> {
    try {
      return await this.linkModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

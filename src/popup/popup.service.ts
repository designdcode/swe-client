import { Injectable } from '@nestjs/common';
import { CreatePopupInput } from './dto/create-popup.input';
import { UpdatePopupInput } from './dto/update-popup.input';
import { InjectModel } from '@nestjs/mongoose';
import { Popup } from './entities/popup.entity';
import { Model, SortOrder } from 'mongoose';
import { PopupReturnType } from '../common/dto/returnType.dto';
import { PaginationArgs } from '../common/dto/paginate.input';

@Injectable()
export class PopupService {
  constructor(
    @InjectModel(Popup.name) private readonly popupModel: Model<Popup>,
  ) {}

  async create(args: CreatePopupInput) {
    try {
      const popup = new this.popupModel(args);
      return popup;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(
    args: PaginationArgs,
    category: string,
  ): Promise<PopupReturnType> {
    try {
      if (typeof args === 'undefined') {
        return {
          data: await this.popupModel.find(),
          total: await this.popupModel.count(),
        };
      }
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const popups = await this.popupModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions);
      return {
        data: popups,
        total: await this.popupModel.count(),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Popup> {
    try {
      const popup = await this.popupModel.findById({ _id });
      return popup;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdatePopupInput) {
    try {
      const { _id, ...rest } = args;
      const popup = await this.popupModel.findByIdAndUpdate(
        { _id },
        {
          $set: {
            ...rest,
          },
        },
      );
      return popup.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string): Promise<Popup> {
    try {
      return await this.popupModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './entities/member.entity';
import { Model, SortOrder } from 'mongoose';
import { MemberReturnType } from '../common/dto/returnType.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name) private readonly memberModel: Model<Member>,
  ) {}

  async create(args: CreateMemberInput): Promise<Member> {
    try {
      const member = new this.memberModel(args);

      return member.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(args): Promise<MemberReturnType> {
    try {
      if (typeof args === 'undefined') {
        return {
          data: await this.memberModel.find(),
          total: await this.memberModel.count(),
        };
      }
      const { skip, sort, take } = args;
      const sortOptions = {
        [sort?.field]: sort?.order?.toLowerCase() as SortOrder,
      };
      const members = await this.memberModel
        .find(null, null, {
          limit: take,
          skip,
        })
        .sort(sortOptions);
      return {
        data: members,
        total: await this.memberModel.count(),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Member> {
    try {
      const member = await this.memberModel.findById({ _id });
      return member;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateMemberInput): Promise<Member> {
    try {
      const { _id, ...rest } = args;
      const member = await this.memberModel.findByIdAndUpdate(_id, {
        $set: {
          ...rest,
        },
      });
      return member.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string) {
    try {
      return await this.memberModel.findByIdAndRemove({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

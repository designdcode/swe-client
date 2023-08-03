import { Injectable } from '@nestjs/common';
import { CreateFolderInput } from './dto/create-folder.input';
import { UpdateFolderInput } from './dto/update-folder.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Folder } from './entities/folder.entity';

@Injectable()
export class FolderService {
  constructor(
    @InjectModel(Folder.name) private readonly folderModel: Model<Folder>,
  ) {}

  async create(args: CreateFolderInput): Promise<Folder> {
    try {
      const { parentId, ...rest } = args;
      const folder = await this.folderModel.create({
        ...args,
        parentId,
      });

      if (parentId) {
        const parentFolder = await this.folderModel.findById({ _id: parentId });
        if (parentFolder) {
          const existedChildren = parentFolder.children;
          const compiliedChildren = existedChildren.concat({
            _id: String(folder._id),
            label: rest.label || '',
          });
          const newParentFolder = await this.folderModel.findByIdAndUpdate(
            { _id: parentId },
            {
              $set: {
                children: compiliedChildren,
              },
            },
          );
          newParentFolder.save();
        }
      }
      return folder;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll() {
    try {
      return await this.folderModel.find();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(_id: string): Promise<Folder> {
    try {
      return await this.folderModel.findById({ _id });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(args: UpdateFolderInput): Promise<Folder> {
    try {
      const { _id, parentId, ...rest } = args;
      const folder = await this.folderModel.findById({ _id });
      await this.folderModel.findOneAndUpdate(
        { _id },
        {
          $set: {
            parentId,
            ...rest,
          },
        },
      );
      return folder.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(_id: string) {
    return `This action removes a #${_id} folder`;
  }
}

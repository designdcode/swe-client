import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FolderService } from './folder.service';
import { Folder } from './entities/folder.entity';
import { CreateFolderInput } from './dto/create-folder.input';
import { UpdateFolderInput } from './dto/update-folder.input';

@Resolver(() => Folder)
export class FolderResolver {
  constructor(private readonly folderService: FolderService) {}

  @Mutation(() => Folder)
  async createFolder(@Args('args') args: CreateFolderInput): Promise<Folder> {
    return await this.folderService.create(args);
  }

  @Query(() => [Folder], { name: 'folders' })
  async findAll() {
    return await this.folderService.findAll();
  }

  @Query(() => Folder, { name: 'folder' })
  async findOne(@Args('_id') _id: string): Promise<Folder> {
    return await this.folderService.findOne(_id);
  }

  @Mutation(() => Folder)
  async updateFolder(@Args('args') args: UpdateFolderInput) {
    return await this.folderService.update(args);
  }

  @Mutation(() => Folder)
  async removeFolder(@Args('_id') _id: string) {
    return await this.folderService.remove(_id);
  }

  @Mutation(() => Folder)
  async removeFile(
    @Args('folderId') folderId: string,
    @Args('filePath') filePath: string,
  ) {
    return await this.folderService.removeFile(folderId, filePath);
  }
}

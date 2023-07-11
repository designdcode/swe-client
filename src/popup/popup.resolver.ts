import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PopupService } from './popup.service';
import { Popup } from './entities/popup.entity';
import { CreatePopupInput } from './dto/create-popup.input';
import { UpdatePopupInput } from './dto/update-popup.input';
import { PopupReturnType } from '../common/dto/returnType.dto';

@Resolver(() => Popup)
export class PopupResolver {
  constructor(private readonly popupService: PopupService) {}

  @Mutation(() => Popup)
  async createPopup(@Args('args') args: CreatePopupInput) {
    return await this.popupService.create(args);
  }

  @Query(() => PopupReturnType, { name: 'popups' })
  async findAll() {
    return await this.popupService.findAll();
  }

  @Query(() => Popup, { name: 'popup' })
  async findOne(@Args('_id', { type: () => String }) _id: string) {
    return await this.popupService.findOne(_id);
  }

  @Mutation(() => Popup)
  async updatePopup(@Args('args') args: UpdatePopupInput) {
    return await this.popupService.update(args);
  }

  @Mutation(() => Popup)
  async removePopup(@Args('_id', { type: () => String }) _id: string) {
    return this.popupService.remove(_id);
  }
}

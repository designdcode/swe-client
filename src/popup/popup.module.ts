import { Module } from '@nestjs/common';
import { PopupService } from './popup.service';
import { PopupResolver } from './popup.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Popup, PopupSchema } from './entities/popup.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Popup.name,
        schema: PopupSchema,
      },
    ]),
  ],
  providers: [PopupResolver, PopupService],
})
export class PopupModule {}

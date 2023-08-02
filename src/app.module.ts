import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { CommonModule } from './common/common.module';
import { CommentModule } from './comment/comment.module';
import { PopupModule } from './popup/popup.module';
import { LinkModule } from './link/link.module';
import { AuthModule } from './auth/auth.module';
import { MemberModule } from './member/member.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Explorer, ExplorerSchema } from './explorer.schema';

@Module({
  imports: [
    CommonModule,
    BoardModule,
    CommentModule,
    PopupModule,
    LinkModule,
    AuthModule,
    MemberModule,
    MongooseModule.forFeature([
      {
        name: Explorer.name,
        schema: ExplorerSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

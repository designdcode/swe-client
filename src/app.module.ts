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

@Module({
  imports: [
    CommonModule,
    BoardModule,
    CommentModule,
    PopupModule,
    LinkModule,
    AuthModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

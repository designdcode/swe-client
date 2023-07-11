import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { CommonnModule } from './common/common.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [CommonnModule, BoardModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

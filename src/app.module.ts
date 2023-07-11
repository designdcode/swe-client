import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { CommonnModule } from './common/common.module';

@Module({
  imports: [CommonnModule, BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

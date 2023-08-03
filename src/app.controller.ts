import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectModel } from '@nestjs/mongoose';
import { Explorer } from './explorer.schema';
import { diskStorage } from 'multer';
import { Model } from 'mongoose';
import { extname } from 'path';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Explorer.name) private readonly explorerModel: Model<Explorer>,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          //Calling the callback passing the random name generated with the original extension name
          cb(
            null,
            `${file.originalname.split('.')[0]}-${new Date()
              .getTime()
              .toString()}${extname(file.originalname)}`,
          );
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile()
    files: Array<Express.Multer.File>,
  ) {
    return files;
  }
}

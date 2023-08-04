import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Response } from 'express';
import { createReadStream } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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

  @Get('download/*')
  getFile(@Res() res: Response, @Param() params: { path: string }) {
    const path = Object.values(params)[0];
    const file = createReadStream(join(process.cwd(), path));
    file.pipe(res);
    return new StreamableFile(file);
  }
}

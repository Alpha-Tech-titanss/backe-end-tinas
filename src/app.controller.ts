import { Controller, Get, Param, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/stream/:file')
  getFile(@Param('file') filename, @Res() res) {
    const file = createReadStream(join(process.cwd(), 'uploads', filename));
    file.pipe(res);
  }
}

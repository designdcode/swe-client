import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkResolver } from './link.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './entities/link.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Link.name,
        schema: LinkSchema,
      },
    ]),
  ],
  providers: [LinkResolver, LinkService],
})
export class LinkModule {}

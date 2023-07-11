import { Module } from '@nestjs/common';
import { MongoModule } from './mongo.module';
import { ConfigModule } from '@nestjs/config';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [ConfigModule, MongoModule, GraphqlModule],
  exports: [ConfigModule, MongoModule, GraphqlModule],
})
export class CommonnModule {}

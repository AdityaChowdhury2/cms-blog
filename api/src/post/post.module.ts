import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostAggregateService } from './aggregate/post-aggregate/post-aggregate.service';
import { CreatePostCommandHandler } from './commands/create-post/create-post-command.handler';
import { Post } from './entities/post.entity';
import { PostService } from './entities/post.service';
import { PostCreatedEventHandler } from './events/post-created-event.handler';
import { PostController } from './post.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), CqrsModule],
  controllers: [PostController],
  providers: [
    PostService,
    PostAggregateService,
    CreatePostCommandHandler,
    PostCreatedEventHandler,
  ],
  exports: [PostAggregateService],
})
export class PostModule {}

import { Injectable } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { CreatePostDto } from 'src/post/dto/create-post.dto';
import { Post } from 'src/post/entities/post.entity';
import { PostCreatedEvent } from 'src/post/events/post-created.event';

@Injectable()
export class PostAggregateService extends AggregateRoot {
  constructor() {
    super();
  }
  createPost(postPayload: CreatePostDto) {
    const post = new Post();
    Object.assign(post, postPayload);
    this.apply(new PostCreatedEvent(post));
  }
}

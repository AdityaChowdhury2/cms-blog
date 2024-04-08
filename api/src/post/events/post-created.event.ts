import { IEvent } from '@nestjs/cqrs';
import { Post } from '../entities/post.entity';

export class PostCreatedEvent implements IEvent {
  constructor(public post: Post) {}
}

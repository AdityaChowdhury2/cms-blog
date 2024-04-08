import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Post } from '../entities/post.entity';
import { PostService } from '../entities/post.service';
import { PostCreatedEvent } from './post-created.event';

@EventsHandler(PostCreatedEvent)
export class PostCreatedEventHandler
  implements IEventHandler<PostCreatedEvent>
{
  constructor(private readonly postService: PostService) {}
  async handle(event: PostCreatedEvent): Promise<Post> {
    const { post } = event;
    return await this.postService.create(post);
  }
}

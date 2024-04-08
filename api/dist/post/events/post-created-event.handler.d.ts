import { IEventHandler } from '@nestjs/cqrs';
import { Post } from '../entities/post.entity';
import { PostService } from '../entities/post.service';
import { PostCreatedEvent } from './post-created.event';
export declare class PostCreatedEventHandler implements IEventHandler<PostCreatedEvent> {
    private readonly postService;
    constructor(postService: PostService);
    handle(event: PostCreatedEvent): Promise<Post>;
}

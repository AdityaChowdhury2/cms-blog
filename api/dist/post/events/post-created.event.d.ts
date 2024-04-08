import { IEvent } from '@nestjs/cqrs';
import { Post } from '../entities/post.entity';
export declare class PostCreatedEvent implements IEvent {
    post: Post;
    constructor(post: Post);
}

import { AggregateRoot } from '@nestjs/cqrs';
import { CreatePostDto } from 'src/post/dto/create-post.dto';
export declare class PostAggregateService extends AggregateRoot {
    constructor();
    createPost(postPayload: CreatePostDto): void;
}

import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PostAggregateService } from 'src/post/aggregate/post-aggregate/post-aggregate.service';
import { CreatePostCommand } from './create-post.command';
export declare class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
    private publisher;
    private manager;
    constructor(publisher: EventPublisher, manager: PostAggregateService);
    execute(command: CreatePostCommand): Promise<any>;
}

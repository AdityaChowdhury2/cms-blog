import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PostAggregateService } from 'src/post/aggregate/post-aggregate/post-aggregate.service';
import { CreatePostCommand } from './create-post.command';

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler
  implements ICommandHandler<CreatePostCommand>
{
  constructor(
    private publisher: EventPublisher,
    private manager: PostAggregateService,
  ) {}
  async execute(command: CreatePostCommand): Promise<any> {
    const { postPayload } = command;
    const aggregate = this.publisher.mergeObjectContext(this.manager);
    await aggregate.createPost(postPayload);
    aggregate.commit();
  }
}

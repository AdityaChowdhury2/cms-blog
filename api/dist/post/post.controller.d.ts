import { CommandBus } from '@nestjs/cqrs';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    create(postPayload: CreatePostDto): Promise<any>;
}

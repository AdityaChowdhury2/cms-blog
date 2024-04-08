import { ICommand } from '@nestjs/cqrs';
import { CreatePostDto } from 'src/post/dto/create-post.dto';
export declare class CreatePostCommand implements ICommand {
    postPayload: CreatePostDto;
    constructor(postPayload: CreatePostDto);
}

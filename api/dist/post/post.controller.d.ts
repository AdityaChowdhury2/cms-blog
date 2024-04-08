import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<CreatePostDto & import("./entities/post.entity").Post>;
    findAll(skip: string, take: string): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): string;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}

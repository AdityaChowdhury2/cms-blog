import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from './post.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(skip: string, take: string): Promise<Post[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}

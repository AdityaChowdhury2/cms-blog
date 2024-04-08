import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return await this.postRepository.save(createPostDto);
  }

  async findAll(skip: string, take: string) {
    return await this.postRepository.find({
      skip: Number(skip),
      take: Number(take),
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

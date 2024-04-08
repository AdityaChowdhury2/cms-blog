import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePostCommand } from './commands/create-post/create-post.command';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() postPayload: CreatePostDto) {
    return this.commandBus.execute(new CreatePostCommand(postPayload));
  }

  // @Get()
  // findAll(@Query('skip') skip: string, @Query('take') take: string) {
  //   // return this.postService.findAll(skip, take);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   // return this.postService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   // return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  // return this.postService.remove(+id);
  // }
}

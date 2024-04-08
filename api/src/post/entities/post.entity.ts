import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  isPublished: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}

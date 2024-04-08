import { ObjectId } from 'typeorm';
export declare class Post {
    id: ObjectId;
    title: string;
    content: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IPostSchema } from '../interfaces/posts.interface';

export type UserDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, max: 9, min: 9 })
  user_id: number;

  @Prop({ _id: true, unique: true, required: true })
  unique_id: string;

  @Prop()
  name: string;

  @Prop({ default: [] })
  posts: IPostSchema[];
}

export const CatSchema = SchemaFactory.createForClass(Users);

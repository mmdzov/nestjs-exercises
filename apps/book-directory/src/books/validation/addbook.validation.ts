import * as Joi from 'joi';
import { AddBookDto } from '../dto/addbook.dto';

export const AddBookSchema = Joi.object<AddBookDto>({
  name: Joi.string(),
  author: Joi.string(),
  pages: Joi.number(),
});

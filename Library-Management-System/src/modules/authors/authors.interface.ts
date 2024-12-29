import { Types } from "mongoose";

export type TAuthor = {
  name: string;
  biography: string;
  books: Types.ObjectId[];
};

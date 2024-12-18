import { Types } from "mongoose";

export type IAuthor = {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  biography: string;
  books: Types.ObjectId[];
};

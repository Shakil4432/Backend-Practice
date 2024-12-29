import { Types } from "mongoose";

export type TBook = {
  title: string;
  author: Types.ObjectId;
  genre: string;
  isbn: string;
  language: string;
  publicationYear: number;
  totalCopies: number;
  availableCopies: number;
  coverImageUrl?: string;
};

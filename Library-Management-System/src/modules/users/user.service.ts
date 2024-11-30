import { Types } from "mongoose";
import { bookModel } from "../books/books.model";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const userCreatedIntoDB = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};

const borrowBookFromDB = async (userId: string, bookId: string) => {
  console.log(userId, bookId);
  const user = await UserModel.findById(userId);
  const book = await bookModel.findById(bookId);
  if (!user || !book) {
    throw new Error("user and book not found");
  }

  if (book.availableCopies < 1) {
    throw new Error("Book Unavailable");
  }

  const bookObjectId = new Types.ObjectId(bookId);

  user.borrowed_books.push(bookObjectId);
  book.availableCopies -= 1;

  user.save();
  book.save();

  return { user, book };
};

const returnBookIntoDB = async (returnBookId: string, userId: string) => {
  console.log(returnBookId, userId);
  const book = await bookModel.findById(returnBookId);
  const user = await UserModel.findById(userId);

  if (!user || !book) {
    throw new Error("User and book not found");
  }
  console.log(new Types.ObjectId(returnBookId));
  const userRemainBook = user.borrowed_books.filter(
    (bookId) => !bookId.equals(new Types.ObjectId(returnBookId))
  );
  console.log(userRemainBook);
  user.borrowed_books = userRemainBook;
  book.availableCopies += 1;

  user.save();
  book.save();

  return { user, book };
};

export const UserServices = {
  userCreatedIntoDB,
  borrowBookFromDB,
  returnBookIntoDB,
};

import { Ibook } from "./books.interface";
import { bookModel } from "./books.model";

const createBookIntoDB = async (book: Ibook) => {
  const result = await bookModel.create(book);
  return result;
};

const borrowBookFromDB = async (bookId: string) => {
  const book = await bookModel.findById(bookId);

  if (!book || book.availableCopies < 1) {
    throw new Error("Book Unavailable");
  }

  book.availableCopies -= 1;
  book.save();
  return book;
};
export const BookServices = {
  createBookIntoDB,
  borrowBookFromDB,
};

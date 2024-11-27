import { Ibook } from "./books.interface";
import { bookModel } from "./books.model";

const createBookIntoDB = async (book: Ibook) => {
  const result = await bookModel.create(book);
  return result;
};

export const BookServices = {
  createBookIntoDB,
};

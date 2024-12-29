import AppError from "../../error/AppError";
import { authorModel } from "../authors/authors.model";
import { TBook } from "./books.interface";
import { bookModel } from "./books.model";
import httpStatus from "http-status";

const createBookIntoDB = async (book: TBook) => {
  const isAuthorExist = await authorModel.findById({ _id: book?.author });
  if (!isAuthorExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Author not found");
  }

  const isBookAlreadyExist = await bookModel.findOne({ isbn: book?.isbn });
  if (isBookAlreadyExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Book with the same ISBN already exists"
    );
  }

  const result = await bookModel.create(book);
  isAuthorExist?.books.push(result?._id);
  await isAuthorExist?.save();

  return result;
};

export const BookServices = {
  createBookIntoDB,
};

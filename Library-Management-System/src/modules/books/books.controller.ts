import { Request, Response } from "express";
import { bookValidation } from "./books.validation";
import { BookServices } from "./books.services";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;
  const zodBookParseData = bookValidation.bookValidationSchema.parse(bookData);
  const result = await BookServices.createBookIntoDB(zodBookParseData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book created successfully",
    data: result,
  });
});

const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const result = await BookServices.borrowBookFromDB(bookId);
  res.status(200).json({
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  borrowBook,
};

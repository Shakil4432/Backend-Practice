import { Request, Response } from "express";

import { BookServices } from "./books.services";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;

  const result = await BookServices.createBookIntoDB(bookData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book created successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
};

import { Request, Response } from "express";
import { bookValidation } from "./books.validation";
import { BookServices } from "./books.services";

const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;

    const zodBookParseData =
      bookValidation.bookValidationSchema.parse(bookData);

    const result = await BookServices.createBookIntoDB(zodBookParseData);

    res.status(200).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the book",
      error: error,
    });
  }
};

const borrowBook = async (req: Request, res: Response) => {
  const bookId = req.params.id;
  try {
    const result = await BookServices.borrowBookFromDB(bookId);

    res.status(200).json({
      success: true,
      message: "Book borrowed successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

export const BookControllers = {
  createBook,
  borrowBook,
};

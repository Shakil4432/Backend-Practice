import { Request, Response } from "express";
import { bookValidation } from "./books.validation";
import { BookServices } from "./books.services";

const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;

    // Perform schema validation (optional with Zod or other libraries)
    const zodBookParseData =
      bookValidation.bookValidationSchema.parse(bookData);

    // Save book data to the database
    const result = await BookServices.createBookIntoDB(zodBookParseData);

    res.status(200).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      // Zod validation error
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    } else if (error.name === "ValidationError") {
      // Mongoose validation error
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: Object.values(error.errors).map((err: any) => err.message),
      });
    } else {
      // General server error
      res.status(500).json({
        success: false,
        message: "Failed to create book",
        error: error.message,
      });
    }
  }
};

export const BookControllers = {
  createBook,
};

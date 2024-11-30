import { Request, Response } from "express";
import { userValidation } from "./user.validation";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const userZodValidation =
      userValidation.userValidationSchema.parse(userData);
    const result = await UserServices.userCreatedIntoDB(userZodValidation);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
      error: error,
    });
  }
};

const borrowBook = async (req: Request, res: Response) => {
  const { userId, bookId } = req.body;

  try {
    const borrowBook = await UserServices.borrowBookFromDB(userId, bookId);
    res.status(200).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrowBook,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
const returnBook = async (req: Request, res: Response) => {
  const { bookId, userId } = req.body;
  try {
    const result = await UserServices.returnBookIntoDB(bookId, userId);
    res.status(200).json({
      success: true,
      message: "Book returned successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
export const UserController = {
  createUser,
  borrowBook,
  returnBook,
};

import { Request, Response } from "express";
import { authorValidation } from "./authors.validation";
import { AuthorServices } from "./authors.services";

const createAuthor = async (req: Request, res: Response) => {
  const authorData = req.body;
  try {
    const authorZodValidation =
      authorValidation.authorValidationSchema.parse(authorData);
    const result = await AuthorServices.createAuthorIntoDB(authorZodValidation);
    res.status(200).json({
      success: true,
      message: "Author created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the author",
      error: error,
    });
  }
};

export const AuthorController = {
  createAuthor,
};

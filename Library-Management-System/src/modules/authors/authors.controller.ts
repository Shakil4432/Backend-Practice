import { Request, Response } from "express";
import { AuthorServices } from "./authors.services";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createAuthor = catchAsync(async (req: Request, res: Response) => {
  const authorData = req.body;

  const result = await AuthorServices.createAuthorIntoDB(authorData);
  sendResponse(res, {
    success: true,
    message: "Author created successfully",
    statusCode: 201,
    data: result,
  });
});

export const AuthorController = {
  createAuthor,
};

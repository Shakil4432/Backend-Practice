import { Request, Response } from "express";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const userData = req.body;

  const result = await UserServices.userCreatedIntoDB(userData);
  sendResponse(res, {
    success: true,
    message: "User created successfully",
    statusCode: 201,
    data: result,
  });
});

export const UserController = {
  createUser,
};

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

export const UserController = {
  createUser,
};

import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";
import { TUserRole } from "../modules/users/user.interface";
import { catchAsync } from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import httpStatus from "http-status";
import { User } from "../modules/users/user.model";

const auth = (...requiredRules: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized user"
      );
    }

    const decoded = jwt.verify(
      token,
      config.access_token_secret as string
    ) as JwtPayload;
    const { email, role } = decoded;
    const isUserExist = await User.findOne({ email });
    console.log(isUserExist);

    if (!isUserExist) {
      throw new AppError(httpStatus.BAD_REQUEST, "User not found");
    }

    const isBlocked = isUserExist?.isBlocked;

    if (isBlocked) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are blocked by admin");
    }

    if (requiredRules && !requiredRules.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }

    req.user = { email: email, role: role };
    next();
  });
};

export default auth;

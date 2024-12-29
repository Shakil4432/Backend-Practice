import config from "../../config";
import AppError from "../../error/AppError";
import { User } from "../users/user.model";
import { TUserLogin } from "./auth.interface";
import Jwt from "jsonwebtoken";

const userLogin = async (payload: TUserLogin) => {
  const email = payload?.email;
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User not found please register"
    );
  }

  const isBlocked = isUserExist?.isBlocked;
  if (isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, "User is blocked");
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid password");
  }

  const jwtPayload = {
    email: isUserExist.email,
    role: isUserExist.role,
  };

  const accessToken = Jwt.sign(
    jwtPayload,
    config.access_token_secret as string,
    {
      expiresIn: config.access_token_expires_time,
    }
  );
  console.log(accessToken);

  return accessToken;
};

export const AuthServices = {
  userLogin,
};

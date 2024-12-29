import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const userLogin = catchAsync(async (req, res) => {
  const result = await AuthServices.userLogin(req.body);
  sendResponse(res, {
    success: true,
    message: "User logged in successfully",
    statusCode: 200,
    data: result,
  });
});

export const AuthController = {
  userLogin,
};

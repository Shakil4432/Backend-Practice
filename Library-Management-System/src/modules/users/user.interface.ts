import { Model, Types } from "mongoose";
import { USER_ROLE } from "../../interface/userRole";
type TBorrowBook = {
  bookId: Types.ObjectId;
  borrowDate: Date;
  dueDate: Date;
  returnDate?: Date;
  finePaid: boolean;
};

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "librarian" | "member";
  isBlocked: boolean;
  borrowedBooks?: [TBorrowBook];
  isActive: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashPassword: string
  ): Promise<boolean>;
}

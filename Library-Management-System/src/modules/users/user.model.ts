import { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    firstName: {
      type: String,
      required: [true, "Name is required"],
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  email: { type: String, required: [true, "Email is required"], unique: true },
  borrowed_books: [{ type: Schema.Types.ObjectId, ref: "book" }],
});

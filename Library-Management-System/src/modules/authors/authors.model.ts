import { model, Schema } from "mongoose";
import { IAuthor } from "./authors.interface";

const authorSchema = new Schema<IAuthor>({
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
  biography: {
    type: String,
    required: [true, "Biography is required"],
  },
  books: {
    type: [String],
    required: [true, "Books are required"],
  },
});

export const authorModel = model<IAuthor>("author", authorSchema);

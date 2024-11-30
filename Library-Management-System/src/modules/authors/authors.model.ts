import { model, Schema } from "mongoose";
import { TAuthor } from "./authors.interface";

const authorSchema = new Schema<TAuthor>({
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
    type: [{ type: Schema.Types.ObjectId, ref: "book" }],
    required: [true, "Books are required"],
  },
});

export const authorModel = model<TAuthor>("author", authorSchema);

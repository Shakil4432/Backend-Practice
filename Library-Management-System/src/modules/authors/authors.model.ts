import { model, Schema } from "mongoose";
import { TAuthor } from "./authors.interface";

const authorSchema = new Schema<TAuthor>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  biography: {
    type: String,
    required: [true, "Biography is required"],
  },
  books: {
    type: [{ type: Schema.Types.ObjectId, ref: "Books" }],
    required: [true, "Books are required"],
    default: [],
  },
});

export const authorModel = model<TAuthor>("author", authorSchema);

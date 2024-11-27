import { model, Schema } from "mongoose";
import { Ibook } from "./books.interface";

const bookSchema = new Schema<Ibook>({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  author: {
    type: Schema.Types.ObjectId,
    required: [true, "author is required"],
  },
  ISBN: { type: String, required: [true, "ISBN is required"] },
  category: {
    type: String,
    enum: ["fiction", "non-fiction", "science"],
    required: [true, "category is required"],
  },
  availableCopies: {
    type: Number,
    required: [true, "availableCopies is required"],
  },
  totalCopies: { type: Number, required: [true, "totalCopies is required"] },
});

export const bookModel = model<Ibook>("book", bookSchema);

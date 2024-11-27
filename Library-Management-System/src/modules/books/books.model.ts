import { model, Schema } from "mongoose";
import { Ibook } from "./books.interface";

const bookSchema = new Schema<Ibook>({
  title: {
    type: String,
    required: [true, "title is required"],
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: [true, "author is required"],
    ref: "Author", // Assuming you have an Author model for reference
  },
  ISBN: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true, // Ensure ISBN is unique
    validate: {
      validator: (value: string) =>
        /^(?:\d{9}X|\d{10}|\d{13}|\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1})$/.test(
          value
        ),
      message: "Invalid ISBN format",
    },
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction", "science"],
    required: [true, "category is required"],
  },
  availableCopies: {
    type: Number,
    required: [true, "availableCopies is required"],
    min: [1, "availableCopies must be at least 1"],
    validate: {
      validator: function (this: Ibook, value: number) {
        return value <= this.totalCopies;
      },
      message: "availableCopies cannot exceed totalCopies",
    },
  },
  totalCopies: {
    type: Number,
    required: [true, "totalCopies is required"],
    min: [1, "totalCopies must be at least 1"],
  },
});

export const bookModel = model<Ibook>("book", bookSchema);

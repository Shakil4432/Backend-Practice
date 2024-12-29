import { model, Schema } from "mongoose";
import { TBook } from "./books.interface";
const BookSchema = new Schema<TBook>({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "Author is required"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
    trim: true,
  },
  isbn: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true,
    trim: true,
  },
  language: {
    type: String,
    required: [true, "Language is required"],
  },
  publicationYear: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [0, "Publication year cannot be negative"],
  },
  totalCopies: {
    type: Number,
    required: [true, "Total copies are required"],
    min: [0, "Total copies cannot be negative"],
  },
  availableCopies: {
    type: Number,
    required: [true, "Available copies are required"],
    min: [0, "Available copies cannot be negative"],
    validate: {
      validator: function (this: TBook) {
        return this.availableCopies <= this.totalCopies;
      },
      message: "Available copies cannot exceed total copies",
    },
  },
});

export const bookModel = model<TBook>("Books", BookSchema);

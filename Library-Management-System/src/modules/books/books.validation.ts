import { Types } from "mongoose";
import { z } from "zod";

const bookValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),
    author: z.string({ required_error: "Author is required" }),

    genre: z.string(),
    isbn: z
      .string()
      .regex(/^\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$/, "Invalid ISBN format"), // Example ISBN validation
    language: z.string(),
    publicationYear: z
      .number()
      .int("Publication year must be an integer")
      .min(0, "Publication year cannot be negative")
      .max(
        new Date().getFullYear(),
        "Publication year cannot be in the future"
      ),
    totalCopies: z
      .number()
      .int("Total copies must be an integer")
      .min(0, "Total copies cannot be negative"),
    availableCopies: z
      .number()
      .int("Available copies must be an integer")
      .min(0, "Available copies cannot be negative"),
    coverImageUrl: z.string().url("Invalid URL format"),
  }),
});

export const bookValidation = {
  bookValidationSchema,
};

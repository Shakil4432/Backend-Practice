import { Types } from "mongoose";
import { z } from "zod";

const bookValidationSchema = z.object({
  title: z.string(),
  author: z
    .string()
    .refine((value) => Types.ObjectId.isValid(value), {
      message: "Invalid author ObjectId format",
    })
    .transform((value) => new Types.ObjectId(value)),
  ISBN: z
    .string()
    .refine(
      (value) =>
        /^(?:\d{9}X|\d{10}|\d{13}|\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1})$/.test(
          value
        ),
      { message: "Invalid ISBN format" }
    ),
  category: z.enum(["fiction", "non-fiction", "science"]),
  availableCopies: z.number().positive("total copies must be greater than 0"),
  totalCopies: z.number().positive("total copies must be greater than 0"),
});

export const bookValidation = {
  bookValidationSchema,
};

import { Types } from "mongoose";
import { z } from "zod";

const authorValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    biography: z.string(),
    books: z
      .array(
        z
          .string()
          .refine((value) => Types.ObjectId.isValid(value), {
            message: "Invalid book ID",
          })
          .transform((value) => new Types.ObjectId(value))
      )
      .default([]),
  }),
});

export const authorValidation = {
  authorValidationSchema,
};

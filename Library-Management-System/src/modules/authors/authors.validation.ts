import { Types } from "mongoose";
import { z } from "zod";

const authorValidationSchema = z.object({
  name: z.object({
    firstName: z
      .string()
      .min(1)
      .max(20)
      .refine((value) => /^[A-Z]/.test(value), {
        message: "First letter must be a capital letter",
      }),
    middleName: z.string().optional(),
    lastName: z.string().min(1).max(20),
  }),
  biography: z.string(),
  books: z.array(
    z
      .string()
      .refine((value) => Types.ObjectId.isValid(value), {
        message: "Invalid book ID",
      })
      .transform((value) => new Types.ObjectId(value))
  ),
});

export const authorValidation = {
  authorValidationSchema,
};

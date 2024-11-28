import { z } from "zod";
import { Types } from "mongoose";

const userValidationSchema = z.object({
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
  role: z
    .enum(["admin", "member"], { message: "role is required" })
    .default("member"),

  email: z.string().email(),
  borrowed_books: z.array(
    z
      .string()
      .refine((value) => Types.ObjectId.isValid(value), {
        message: "Book ID is invalid",
      })
      .transform((value) => new Types.ObjectId(value))
  ),
});

export const userValidation = {
  userValidationSchema,
};

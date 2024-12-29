import { z } from "zod";

const BorrowBookSchema = z.object({
  bookId: z.string().min(1, "Book ID is required"),
  borrowDate: z.date(),
  dueDate: z.date(),
  returnDate: z.date().optional(),
  finePaid: z.boolean(),
});

const UserValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["admin", "librarian", "member"]).default("member"),
  isBlocked: z.boolean().default(false),
  borrowedBooks: z.array(BorrowBookSchema).optional().default([]),
  isActive: z.boolean().default(true),
});
export const userValidation = {
  UserValidationSchema,
};

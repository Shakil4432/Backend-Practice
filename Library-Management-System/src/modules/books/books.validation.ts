import { z } from "zod";

const bookValidationSchema = z.object({
  title: z.string(),
  author: z.string(),
  ISBN: z.string(),
  category: z.enum(["fiction", "non-fiction", "science"]),
  availableCopies: z.number().positive("total copies must be greater than 0"),
  totalCopies: z.number().positive("total copies must be greater than 0"),
});

export const bookValidation = {
  bookValidationSchema,
};

import { z } from "zod";

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
  email: z.string().email(),
});

export const userValidation = {
  userValidationSchema,
};

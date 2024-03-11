import { z } from "zod";
export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "title must be at least 5 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  body: z
    .string()
    .max(80, {
      message: "body must not be longer than 30 characters.",
    })
    .optional(),
});
export type TodoFormValues = z.infer<typeof todoFormSchema>;
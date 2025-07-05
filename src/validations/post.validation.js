import { z } from "zod";

export const createPostSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    dueDate: z.coerce.date({
        required_error: "Due date is required",
        invalid_type_error: "Invalid date format"
    }),
    priority: z.number({
      required_error: "Priority is required",
      invalid_type_error: "Priority must be a number",
    }).int(),
    isCompleted: z.boolean().optional()
})

export const updatePostSchema = createPostSchema.partial()

export const paramIdSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid post ID")
});
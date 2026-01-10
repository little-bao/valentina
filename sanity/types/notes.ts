import z from "zod";

export const NoteCategoryType = z.enum([
  "flag",
  "weather",
  "reading",
  "thought",
  "life",
  "work",
  "other",
]);

export type NoteCategory = z.infer<typeof NoteCategoryType>;

export const Notes = z.object({
  _id: z.string(),
  _createdAt: z.string(),
  content: z.string(),
  type: NoteCategoryType,
  images: z.array(z.string()).optional(),
  isPublic: z.boolean().optional(),
});

export type NoteType = z.infer<typeof Notes>;

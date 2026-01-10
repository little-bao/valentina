import z from "zod";

export const Project = z.object({
  _id: z.string(),
  name: z.string(),
  url: z.url(),
  description: z.string(),
  icon: z.object({
    _type: z.literal("image"),
    asset: z.object({
      _ref: z.string(),
      _type: z.literal("reference"),
    }),
  }),
  category: z.enum(["work", "personal", "other"]),
});

export type ProjectType = z.infer<typeof Project>;

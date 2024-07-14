import { model, Schema } from "mongoose";
import { BlogType } from "../type/types";


const blogSchema = new Schema<BlogType>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  meta: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true
})

export const Blog = model<BlogType>('Blog', blogSchema)
import { model, Schema } from "mongoose";
import { PageType } from "../type/types";


const pageSchema = new Schema<PageType>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  meta: {
    type: String,
    
  },
  image: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  })

export const Page = model('Page', pageSchema)

import { model, Schema } from "mongoose";
import { DubaiDeveloperType } from "../type/types";


const amenitySchema = new Schema<DubaiDeveloperType>({
  title: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  image: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
})

export const DubaiDeveloper = model('Developers', amenitySchema)
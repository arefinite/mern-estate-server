
import { model, Schema } from "mongoose";
import {  DubaiAreaType } from "../type/types";


const dubaiAreaSchema = new Schema<DubaiAreaType>({
  title: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
},
  {
    timestamps: true
})

export const DubaiArea = model('Areas', dubaiAreaSchema)
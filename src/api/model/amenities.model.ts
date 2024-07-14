import { model, Schema } from "mongoose";
import { AmenityType } from "../type/types";


const amenitySchema = new Schema<AmenityType>({
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

export const Amenity = model('Amenity', amenitySchema)
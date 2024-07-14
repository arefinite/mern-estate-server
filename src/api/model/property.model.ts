import { model, Schema } from "mongoose";
import { PropertyType } from "../type/types";


const PropertySchema = new Schema<PropertyType>(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    propertyType: { type: String, required: true },
    googleMap: { type: String, required: true },
    price: { type: Number, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    size: { type: Number, required: true },
    furnishedType: { type: String, required: true },
    propertyAgent: { type: String, required: true },
    bannerImage: { type: String, required: true }, 
    thumbnailImages: { type: [String], required: true }, 
    videoUrl: { type: String, required: true },
    featured: { type: String, required: true },
    status: { type: Boolean, required: true },
    meta: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create and export the Property model
export const Property = model('Property', PropertySchema);
import { model, Schema } from "mongoose";
import { AdminType } from "../type/types";


const adminSchema = new Schema<AdminType>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export const Admin = model('Admin', adminSchema)
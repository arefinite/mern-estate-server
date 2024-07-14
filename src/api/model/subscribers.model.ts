import { model, Schema } from "mongoose";
import {  SubscriberType } from "../type/types";


const subscriberSchema = new Schema<SubscriberType>({
  name: {
    type: String,
    required: true
  },
  email: {
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

export const Subscriber = model('Subscriber', subscriberSchema)
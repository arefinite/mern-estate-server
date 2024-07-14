import { model, Schema } from 'mongoose'
import { AgentType } from '../type/types'

const amenitySchema = new Schema<AgentType>(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Agents = model('Agents', amenitySchema)

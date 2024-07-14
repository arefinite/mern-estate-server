import { model, Schema } from "mongoose";
import { LogType } from "../type/types";

const logSchema = new Schema<LogType>({
  email: { type: String, required: true },

},
  {
    timestamps: true
  })

  export const Log = model('Log', logSchema)
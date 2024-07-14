import { Router } from "express";
import { createAdmin, updatePassword } from "../controller/admin.controller";


export const adminRouter = Router()
adminRouter.post('/create-admin', createAdmin)
adminRouter.patch('/update-password', updatePassword)
import  asyncHandler  from 'express-async-handler';
import { Admin } from '../model/admin.model';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import bcrypt from 'bcryptjs'


//create a new admin
export const createAdmin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const admin = await Admin.create({ email, password: hashedPassword})
    if (!admin) return next(createHttpError(404, 'Admin not created'))
    res.status(201).json({ message: 'Admin created successfully' })
  }
)

//update admin password
export const updatePassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { newPassword } = req.body
    console.log(newPassword)
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    const admin = await Admin.findOneAndUpdate({ email:"admin@admin.com" }, { password:hashedPassword })
    if (!admin) return next(createHttpError(404, 'Admin not found'))
    res.status(200).json({ message: 'Admin password updated successfully' })
  }
)
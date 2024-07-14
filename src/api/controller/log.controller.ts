import  asyncHandler  from 'express-async-handler';
import { Log } from '../model/log.model';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';


//create log
export const createLog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const newLog = await Log.create({email:'admin@admin.com'})
    if (!newLog) return next(createHttpError(404, 'Log not created'))
    res.status(201).json({ message: 'Log created successfully' })
  }
)

//get logs
export const getLogs = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const logs = await Log.find()
    if (!logs) return next(createHttpError(404, 'Logs not found'))
    res.status(200).json(logs )
  }
)
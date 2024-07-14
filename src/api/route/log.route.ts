
import { Router } from "express";
import { createLog, getLogs } from "../controller/log.controller";


export const logRouter = Router()

logRouter.post('/create-log', createLog)
logRouter.get('/get-logs', getLogs)
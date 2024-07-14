import { Router } from "express";
import { upload } from "../service/multer";
import { createAgent, deleteAgent, getAgent, getAgents, updateAgent } from "../controller/agents.controller";


export const agentRouter = Router()

agentRouter.get('/get-agents', getAgents)
agentRouter.post('/create-agent',upload.fields([{ name: 'image', maxCount: 1 }]),createAgent )
agentRouter.route('/:id').get(getAgent).patch(upload.fields([{name: 'image', maxCount:1}]),updateAgent).delete(deleteAgent)
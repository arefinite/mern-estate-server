import { Router } from "express";
import { createSubscriber, deleteSubscriber, getSubscriber, getSubscribers, updateSubscriber } from "../controller/subscriber.controller";


export const subscriberRouter = Router()

subscriberRouter.get('/get-subscribers', getSubscribers)
subscriberRouter.post('/create-subscriber', createSubscriber)
subscriberRouter.route('/:id').get(getSubscriber).patch(updateSubscriber).delete(deleteSubscriber)
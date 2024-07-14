import { Request, Response } from 'express';
import  asyncHandler from 'express-async-handler';
import { Subscriber } from '../model/subscribers.model';

//get all subscribers
export const getSubscribers = asyncHandler(
  async (req: Request, res: Response) => {
    const amenities = await Subscriber.find({})
    res.status(200).json(amenities)
  }
)

//get single subscriber
export const getSubscriber = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const subscriber = await Subscriber.findById(id)
    res.status(200).json(subscriber)
  }
)

//create subscriber
export const createSubscriber = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, status } = req.body
    const subscriber = await Subscriber.create({ name, email, status })
    res.status(201).json({ msg: 'Subscriber created' })
  }
)

//update subscriber
export const updateSubscriber = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, status } = req.body
    await Subscriber.findByIdAndUpdate(id, { name, email, status }, { new: true })
    res.status(200).json({ msg: 'Subscriber updated' })
  })

//delete subscriber
export const deleteSubscriber = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await Subscriber.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Subscriber deleted' })
  }
)
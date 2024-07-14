
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'
import { DubaiArea } from '../model/dubaiArea.model';


//get all dubai areas
export const getDubaiAreas = asyncHandler(
  async (req: Request, res: Response) => {
    const dubaiAreas = await DubaiArea.find({})
    res.status(200).json(dubaiAreas)
  }
)

//get single dubai area
export const getDubaiArea = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const dubaiArea = await DubaiArea.findById(id)
    res.status(200).json(dubaiArea)
  }
)

//create dubai area
export const createDubaiArea = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, status } = req.body
    const dubaiArea = await DubaiArea.create({ title, status })
    res.status(201).json({ msg: 'Dubai area created' })
  }
)

//update dubai area
export const updateDubaiArea = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, status } = req.body
    await DubaiArea.findByIdAndUpdate(id, { title, status }, { new: true })
    res.status(200).json({ msg: 'Dubai area updated' })
  }
)

//delete dubai area
export const deleteDubaiArea = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await DubaiArea.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Dubai area deleted' })
  }
)
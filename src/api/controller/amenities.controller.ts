import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { Amenity } from '../model/amenities.model'
import createHttpError from 'http-errors'

//get all amenities
export const getAmenities = asyncHandler(
  async (req: Request, res: Response) => {
    const amenities = await Amenity.find({})
    res.status(200).json(amenities)
  }
)

//get single amenity
export const getAmenity = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const amenity = await Amenity.findById(id)
    if (!amenity) return next(createHttpError(404, 'Amenity not found'))
    res.status(200).json(amenity)
  }
)

//create amenity
export const createAmenity = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, status } = req.body
    const amenity = await Amenity.create({ title, status })
    if (!amenity) return next(createHttpError(400, 'Amenity not created'))
    res.status(201).json({ msg: 'Amenity created' })
  }
)

//update amenity
export const updateAmenity = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, status } = req.body
    await Amenity.findByIdAndUpdate(id, { title, status }, { new: true })
    res.status(200).json({ msg: 'Amenity updated' })
  }
)

//delete amenity
export const deleteAmenity = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await Amenity.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Amenity deleted' })
  }
)

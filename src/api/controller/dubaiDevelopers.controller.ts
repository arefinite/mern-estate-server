import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import createHttpError from 'http-errors'
import { DubaiDeveloper } from '../model/dubaiDevelopers.model'
import path from 'node:path'
import cloudinary from '../../config/cloudinary'
import fs from 'node:fs'

//get all dubai developers
export const getDubaiDevelopers = asyncHandler(
  async (req: Request, res: Response) => {
    const dubaiDevelopers = await DubaiDeveloper.find({})
    res.status(200).json(dubaiDevelopers)
  }
)

//get single dubai developer
export const getDubaiDeveloper = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const dubaiDeveloper = await DubaiDeveloper.findById(id)
    if (!dubaiDeveloper) return next(createHttpError(404, 'Dubai Developer not found'))
    res.status(200).json(dubaiDeveloper)
  }
)

//create dubai developer
export const createDubaiDeveloper = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, status } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }
    //get the developer image
    const developerImgMimeType = files.image[0].mimetype.split('/').at(-1)
    const developerImgName = files.image[0].filename
    const developerImgPath = path.resolve(
      __dirname,
      `../../../public/data/uploads`,
      developerImgName
    )
    // upload the developer image  to cloudinary

    const developerImgUploadResult = await cloudinary.uploader.upload(
      developerImgPath,
      {
        filename_override: developerImgName,
        folder: 'developer-images',
        format: developerImgMimeType,
      }
    )
    //create new dubai developer
    const newDeveloper = await DubaiDeveloper.create({
      title,
      status,
      image: developerImgUploadResult.secure_url,
    })
    await fs.promises.unlink(developerImgPath)
    if (!newDeveloper) return next(createHttpError(404, 'Dubai Developer not added'))
    res.status(201).json({ message: 'Dubai Developer added successfully' })
  }
)

//update dubai developer
export const updateDubaiDeveloper = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, status } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let updateData: any = { title, status }

    if (files && files.image && files.image.length > 0) {
      const developerImgMimeType = files.image[0].mimetype.split('/').at(-1)
      const developerImgName = files.image[0].filename
      const developerImgPath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        developerImgName
      )

      // upload the developer image to cloudinary
      const developerImgUploadResult = await cloudinary.uploader.upload(
        developerImgPath,
        {
          filename_override: developerImgName,
          folder: 'developer-images',
          format: developerImgMimeType,
        }
      )

      await fs.promises.unlink(developerImgPath)
      updateData.image = developerImgUploadResult.secure_url
    }

    await DubaiDeveloper.findByIdAndUpdate(id, updateData)
    res.status(200).json({ message: 'Dubai Developer updated' })
  }
)

//delete dubai developer
export const deleteDubaiDeveloper = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await DubaiDeveloper.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Dubai Developer deleted' })
  }
)

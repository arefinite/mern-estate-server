import asyncHandler from 'express-async-handler'
import { NextFunction, Request, Response } from 'express'
import { Page } from '../model/pages.model'
import path from 'path'
import fs from 'fs'
import cloudinary from '../../config/cloudinary'

//get about page
export const getPageAbout = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('66913721f8ee109d59eac7b3')
    res.status(200).json(page)
  }
)

// create or update Page About
export const createOrUpdatePageAbout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('66913721f8ee109d59eac7b3')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page created successfully' })
    }
  }
)

//get why dubai page
export const getPageWhyDubai = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('66915ced403f8ec369314674')
    res.status(200).json(page)
  }
)

// create or update Page why dubai
export const createOrUpdatePageWhyDubai = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('66915ced403f8ec369314674')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page  created successfully' })
    }
  }
)

//get invest in dubai estate page
export const getPageInvestDubaiEstate = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('669160bf48008de291473dfd')
    res.status(200).json(page)
  }
)

// create or update dubai estate page
export const createOrUpdatePageInvestDubaiEstate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('669160bf48008de291473dfd')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page  created successfully' })
    }
  }
)

//get dubai fact numbers page
export const getPageDubaiFactNumbers = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('669163f073bbbce8bc59f26c')
    res.status(200).json(page)
  }
)

// create or update Page dubai fact numbers
export const createOrUpdatePageDubaiFactNumbers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('669163f073bbbce8bc59f26c')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page  created successfully' })
    }
  }
)

//get why invest in off plan page
export const getPageWhyInvestOffPlan = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('66916483802c7e773faf548e')
    res.status(200).json(page)
  }
)

// create or update why invest in off plan page
export const createOrUpdatePageWhyInvestOffPlan = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('66916483802c7e773faf548e')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page  created successfully' })
    }
  }
)

//guide on renting page
export const getPageGuideOnRenting = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('6691683a7d097cc82d7d9c42')
    res.status(200).json(page)
  }
)

// create or update guide on renting page
export const createOrUpdatePageGuideOnRenting = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('6691683a7d097cc82d7d9c42')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page  created successfully' })
    }
  }
)

//guide to selling page
export const getPageGuideToSelling = asyncHandler(
  async (req: Request, res: Response) => {
    const page = await Page.findById('669168a68d79964b24e265ab')
    res.status(200).json(page)
  }
)

// create or update guide to selling page
export const createOrUpdatePageGuideToSelling = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let imageUrl: string | undefined
    let page = await Page.findById('669168a68d79964b24e265ab')

    if (files && files.image && files.image.length > 0) {
      const imageMimeType = files.image[0].mimetype.split('/').at(-1)
      const imageName = files.image[0].filename
      const imagePath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        imageName
      )

      // upload the image to cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(imagePath, {
        filename_override: imageName,
        folder: 'pages-image',
        format: imageMimeType,
      })

      await fs.promises.unlink(imagePath)
      imageUrl = imageUploadResult.secure_url
    } else if (page) {
      // keep the previous image if no new image is provided
      imageUrl = page.image as string
    }

    const pageData = {
      title,
      meta,
      description,
      image: imageUrl,
    }

    if (page) {
      // update existing page
      page = await Page.findByIdAndUpdate(page._id, pageData, { new: true })
      res.status(200).json({ message: 'Page updated successfully' })
    } else {
      // create new page
      page = await Page.create(pageData)
      res.status(201).json({ message: 'Page  created successfully' })
    }
  }
)

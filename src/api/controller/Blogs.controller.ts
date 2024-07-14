import path from 'node:path';
import fs from 'node:fs';
import  asyncHandler  from 'express-async-handler';
import { Blog } from '../model/blogs.model';
import { NextFunction, Request, Response } from 'express';
import cloudinary from '../../config/cloudinary';
import createHttpError from 'http-errors';

//get all blogs
export const getBlogs = asyncHandler(
  async (req: Request, res: Response) => {
    const blogs = await Blog.find({})
    res.status(200).json(blogs)
  }
)

//get single blog
export const getBlog = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const blog = await Blog.findById(id)
    res.status(200).json(blog)
  }
)

//create blog
export const createBlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, meta, description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }
    //get the developer image
    const blogImgMimeType = files.image[0].mimetype.split('/').at(-1)
    const blogImgName = files.image[0].filename
    const blogImgPath = path.resolve(
      __dirname,
      `../../../public/data/uploads`,
      blogImgName
    )
    // upload the developer image  to cloudinary

    const developerImgUploadResult = await cloudinary.uploader.upload(
      blogImgPath,
      {
        filename_override: blogImgName,
        folder: 'blog-images',
        format: blogImgMimeType,
      }
    )
    //create new dubai developer
    const newDeveloper = await Blog.create({
      title,
      meta,
      description,
      image: developerImgUploadResult.secure_url,
    })
    await fs.promises.unlink(blogImgPath)
    if (!newDeveloper) return next(createHttpError(404, 'Dubai Developer not added'))
    res.status(201).json({ message: 'Blog added successfully' })
  }
)

//update blog
export const updateBlog = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, meta,description } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }

    let updateData: any = { title, meta, description }

    if (files && files.image && files.image.length > 0) {
      const blogImgMimeType = files.image[0].mimetype.split('/').at(-1)
      const blogImgName = files.image[0].filename
      const blogImgPath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        blogImgName
      )

      // upload the developer image to cloudinary
      const developerImgUploadResult = await cloudinary.uploader.upload(
        blogImgPath,
        {
          filename_override: blogImgName,
          folder: 'blog-images',
          format: blogImgMimeType,
        }
      )

      await fs.promises.unlink(blogImgPath)
      updateData.image = developerImgUploadResult.secure_url
    }

    await Blog.findByIdAndUpdate(id, updateData)
    res.status(200).json({ message: 'Blog updated' })
  }
)

//delete blog
export const deleteBlog = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Blog deleted' })
  }
)
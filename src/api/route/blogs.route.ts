import express from 'express'
import { createDubaiDeveloper, deleteDubaiDeveloper, getDubaiDeveloper, getDubaiDevelopers, updateDubaiDeveloper } from '../controller/dubaiDevelopers.controller'
import { upload } from '../service/multer'
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../controller/Blogs.controller'

export const blogRouter = express.Router()

blogRouter.get('/get-blogs', getBlogs)
blogRouter.post('/create-blog',upload.fields([{ name: 'image', maxCount: 1 }]),createBlog )
blogRouter.route('/:id').get(getBlog).patch(upload.fields([{name: 'image', maxCount:1}]),updateBlog).delete(deleteBlog)
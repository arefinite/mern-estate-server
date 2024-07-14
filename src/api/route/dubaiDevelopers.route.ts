import express from 'express'
import {
  createDubaiDeveloper,
  deleteDubaiDeveloper,
  getDubaiDeveloper,
  getDubaiDevelopers,
  updateDubaiDeveloper,
} from '../controller/dubaiDevelopers.controller'
import { upload } from '../service/multer'

export const dubaiDevelopersRouter = express.Router()

dubaiDevelopersRouter.get('/get-dubai-developers', getDubaiDevelopers)
dubaiDevelopersRouter.post(
  '/create-dubai-developer',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createDubaiDeveloper
)
dubaiDevelopersRouter
  .route('/:id')
  .get(getDubaiDeveloper)
  .patch(upload.fields([{ name: 'image', maxCount: 1 }]), updateDubaiDeveloper)
  .delete(deleteDubaiDeveloper)

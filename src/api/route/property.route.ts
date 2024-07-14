import { Router } from 'express'
import { upload } from '../service/multer'
import {
  createProperty,
  deleteProperty,
  getProperties,
  getProperty,
  updateProperty,
} from '../controller/properties.controller'

export const propertyRouter = Router()
propertyRouter.get('/get-properties', getProperties)
propertyRouter.get('/:id', getProperty)
propertyRouter.patch(
  '/:id',
  upload.fields([
    { name: 'bannerImage', maxCount: 1 },
    { name: 'thumbnailImages', maxCount: 1000 },
  ]),
  updateProperty
)
propertyRouter.delete('/:id', deleteProperty)
propertyRouter.post(
  '/create-property',
  upload.fields([
    { name: 'bannerImage', maxCount: 1 },
    { name: 'thumbnailImages', maxCount: 1000 },
  ]),
  createProperty
)

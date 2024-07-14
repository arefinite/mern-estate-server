import express from 'express'
import { createAmenity, deleteAmenity, getAmenities, getAmenity, updateAmenity } from '../controller/amenities.controller'

export const amenitiesRouter = express.Router()

amenitiesRouter.get('/get-amenities', getAmenities)
amenitiesRouter.post('/create-amenity', createAmenity)
amenitiesRouter.route('/:id').get(getAmenity).patch(updateAmenity).delete(deleteAmenity)
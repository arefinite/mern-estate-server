

import express from 'express'
import { createDubaiArea, deleteDubaiArea, getDubaiArea, getDubaiAreas, updateDubaiArea } from '../controller/dubaiAreas.controller'


export const dubaiAreasRouter = express.Router()

dubaiAreasRouter.get('/get-dubai-areas', getDubaiAreas)
dubaiAreasRouter.post('/create-dubai-area', createDubaiArea)
dubaiAreasRouter.route('/:id').get(getDubaiArea).patch(updateDubaiArea).delete(deleteDubaiArea)
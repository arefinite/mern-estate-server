import { NextFunction, Request, Response } from 'express'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from '../config/config'
import path from 'path'
import { globalErrorHandler } from './middleware/globalErrorHandler'
import { dubaiDevelopersRouter } from './route/dubaiDevelopers.route'
import { amenitiesRouter } from './route/amenities.route'
import { dubaiAreasRouter } from './route/dubaiAreas.route'
import { subscriberRouter } from './route/subscribers.router'
import { agentRouter } from './route/agents.route'
import { pageRouter } from './route/pages.route'
import { blogRouter } from './route/blogs.route'
import { adminRouter } from './route/admin.route'
import { logRouter } from './route/log.route'
import { propertyRouter } from './route/property.route'

export const app = express()

// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'))
}
app.use(
  cors({
    origin: config.FRONTEND_URL,
  })
)
app.use(express.static(path.join(__dirname, '../../../client/dist')))


//routes

app.use('/api/v1/amenities', amenitiesRouter)
app.use('/api/v1/dubai-developers', dubaiDevelopersRouter)
app.use('/api/v1/dubai-areas', dubaiAreasRouter)
app.use('/api/v1/subscribers', subscriberRouter)
app.use('/api/v1/agents', agentRouter)
app.use('/api/v1/pages', pageRouter)
app.use('/api/v1/blogs', blogRouter)
app.use('/api/v1/settings', adminRouter)
app.use('/api/v1/logs', logRouter)
app.use('/api/v1/properties', propertyRouter)

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log('This is the invalid field ->', err.fieldName)
  console.log('This is the invalid value ->', err.value)
  console.log('This is the error message ->', err.message)
  console.log('This is the error name ->', err.name)
  next(err)
})
//global error handler
app.use(globalErrorHandler)

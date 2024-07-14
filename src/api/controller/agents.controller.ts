import  fs  from 'node:fs';
import  path  from 'node:path';
import { NextFunction, Request, Response } from 'express';
import  asyncHandler  from 'express-async-handler';
import { Agents } from '../model/agents.model';
import cloudinary from '../../config/cloudinary';
import createHttpError from 'http-errors';


//get all agents
export const getAgents = asyncHandler(
  async (req: Request, res: Response) => {
    const dubaiDevelopers = await Agents.find({})
    res.status(200).json(dubaiDevelopers)
  }
)

//get single agent
export const getAgent = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const dubaiDeveloper = await Agents.findById(id)
    res.status(200).json(dubaiDeveloper)
  }
)

//create agent with image reference the agents model
export const createAgent = asyncHandler(
  async (req: Request, res: Response,next:NextFunction) => {
    const { name, designation, languages, biography, email, status, phone } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }
    //get the agent image
    const agentImgMimeType = files.image[0].mimetype.split('/').at(-1)
    const agentImgName = files.image[0].filename
    const agentImgPath = path.resolve(
      __dirname,
      `../../../public/data/uploads`,
      agentImgName
    )
    // upload the agent image  to cloudinary

    const agentImgUploadResult = await cloudinary.uploader.upload(
      agentImgPath,
      {
        filename_override: agentImgName,
        folder: 'agent-images',
        format: agentImgMimeType,
      }
    )
    //create new dubai agent
    const newAgent = await Agents.create({
      name,
      designation,
      languages,
      biography,
      email,
      status,
      phone,
      image: agentImgUploadResult.secure_url,
    })
    await fs.promises.unlink(agentImgPath)
    if (!newAgent) return next(createHttpError(404, 'Dubai Agent not added'))
    res.status(201).json({ message: 'Dubai Agent added successfully' })
  }
)

//update agent
export const updateAgent = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, designation, languages, biography, email, status, phone } = req.body
    const files = req.files as { [filename: string]: Express.Multer.File[] }
    
    let updateData: any = { name, designation, languages, biography, email, status, phone }

    if (files && files.image && files.image.length > 0) {
      const agentImgMimeType = files.image[0].mimetype.split('/').at(-1)
      const agentImgName = files.image[0].filename
      const agentImgPath = path.resolve(
        __dirname,
        `../../../public/data/uploads`,
        agentImgName
      )
      
      // Upload the new agent image to cloudinary
      const agentImgUploadResult = await cloudinary.uploader.upload(
        agentImgPath,
        {
          filename_override: agentImgName,
          folder: 'agent-images',
          format: agentImgMimeType,
        }
      )
      updateData.image = agentImgUploadResult.secure_url

      // Remove the local file after upload
      await fs.promises.unlink(agentImgPath)
    }
    
    await Agents.findByIdAndUpdate(id, updateData, { new: true })

    res.status(200).json({ message: 'Agent updated successfully' })
  }
)

//delete agent
export const deleteAgent = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await Agents.findByIdAndDelete(id)
    res.status(200).json({ message: 'Dubai Agent deleted successfully' })
  }
)
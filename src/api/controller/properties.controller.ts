
import path from "path";
import fs from "fs";
import asyncHandler from "express-async-handler";
import createHttpError from "http-errors";
import { Property } from "../model/property.model";
import cloudinary from "../../config/cloudinary";
import { NextFunction, Request, Response } from "express";


//get all properties
export const getProperties = asyncHandler(
  async (req, res) => {
    const properties = await Property.find();
    res.status(200).json(properties);
  }
);

//get single property
export const getProperty = asyncHandler(
  async (req, res, next) => {
    const property = await Property.findById(req.params.id);
    if (!property) return next(createHttpError(404, 'Property not found'));
    res.status(200).json(property);
  }
);

//create property
export const createProperty = asyncHandler(
  async (req, res, next) => {
    const { 
      type, 
      title, 
      propertyType, 
      googleMap, 
      price, 
      beds, 
      baths, 
      size, 
      furnishedType, 
      propertyAgent, 
      videoUrl, 
      featured, 
      status, 
      meta, 
      description 
    } = req.body;
    console.log(req.files)
    console.log(req.body)

    const files = req.files as { [filename: string]: Express.Multer.File[] }

    if (!files || !files.bannerImage || !files.thumbnailImages) {
      return next(createHttpError(400, "Please upload all required files."));
    }

    // Handling banner image upload
    const bannerImgMimeType = files.bannerImage[0].mimetype.split('/').at(-1);
    const bannerImgName = files.bannerImage[0].filename;
    const bannerImgPath = path.resolve(__dirname, `../../../public/data/uploads`, bannerImgName);

    const bannerImgUploadResult = await cloudinary.uploader.upload(
      bannerImgPath,
      {
        filename_override: bannerImgName,
        folder: 'property-images',
        format: bannerImgMimeType,
      }
    );

    // Handling multiple thumbnail images upload
    const thumbnailImagesUploadResults = [];
    for (const file of files.thumbnailImages) {
      const thumbnailImgMimeType = file.mimetype.split('/').at(-1);
      const thumbnailImgName = file.filename;
      const thumbnailImgPath = path.resolve(__dirname, `../../../public/data/uploads`, thumbnailImgName);

      const thumbnailImgUploadResult = await cloudinary.uploader.upload(
        thumbnailImgPath,
        {
          filename_override: thumbnailImgName,
          folder: 'property-images/thumbnails',
          format: thumbnailImgMimeType,
        }
      );

      thumbnailImagesUploadResults.push(thumbnailImgUploadResult.secure_url);
      await fs.promises.unlink(thumbnailImgPath);
    }

    // Create new property
    const newProperty = await Property.create({
      type,
      title,
      propertyType,
      googleMap,
      price,
      beds,
      baths,
      size,
      furnishedType,
      propertyAgent,
      bannerImage: bannerImgUploadResult.secure_url,
      thumbnailImages: thumbnailImagesUploadResults,
      videoUrl,
      featured,
      status,
      meta,
      description
    });

    await fs.promises.unlink(bannerImgPath);

    if (!newProperty) return next(createHttpError(404, 'Property not added'));
    res.status(201).json({ message: 'Property added successfully' });
  }
);


//update property

export const updateProperty = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  const property = await Property.findById(id);
  if (!property) return next(createHttpError(404, 'Property not found'));

  const {
    type,
    title,
    propertyType,
    googleMap,
    price,
    beds,
    baths,
    size,
    furnishedType,
    propertyAgent,
    videoUrl,
    featured,
    status,
    meta,
    description,
  } = req.body;

  const files = req.files as { [filename: string]: Express.Multer.File[] };

  let updateData: any = {
    type,
    title,
    propertyType,
    googleMap,
    price,
    beds,
    baths,
    size,
    furnishedType,
    propertyAgent,
    videoUrl,
    featured,
    status,
    meta,
    description,
  };

  // Handling banner image upload
  if (files && files.bannerImage && files.bannerImage.length > 0) {
    const bannerImgMimeType = files.bannerImage[0].mimetype.split('/').at(-1);
    const bannerImgName = files.bannerImage[0].filename;
    const bannerImgPath = path.resolve(__dirname, `../../../public/data/uploads`, bannerImgName);

    const bannerImgUploadResult = await cloudinary.uploader.upload(bannerImgPath, {
      filename_override: bannerImgName,
      folder: 'property-images',
      format: bannerImgMimeType,
    });

    await fs.promises.unlink(bannerImgPath);
    updateData.bannerImage = bannerImgUploadResult.secure_url;
  } else {
    updateData.bannerImage = property.bannerImage;
  }

  // Handling multiple thumbnail images upload
  if (files && files.thumbnailImages && files.thumbnailImages.length > 0) {
    const thumbnailImagesUploadResults = [];
    for (const file of files.thumbnailImages) {
      const thumbnailImgMimeType = file.mimetype.split('/').at(-1);
      const thumbnailImgName = file.filename;
      const thumbnailImgPath = path.resolve(__dirname, `../../../public/data/uploads`, thumbnailImgName);

      const thumbnailImgUploadResult = await cloudinary.uploader.upload(thumbnailImgPath, {
        filename_override: thumbnailImgName,
        folder: 'property-images/thumbnails',
        format: thumbnailImgMimeType,
      });

      thumbnailImagesUploadResults.push(thumbnailImgUploadResult.secure_url);
      await fs.promises.unlink(thumbnailImgPath);
    }
    updateData.thumbnailImages = thumbnailImagesUploadResults;
  } else {
    updateData.thumbnailImages = property.thumbnailImages;
  }

  const updatedProperty = await Property.findByIdAndUpdate(req.params.id, updateData, { new: true });

  res.status(200).json({ message: 'Property updated', property: updatedProperty });
});

//delete property
export const deleteProperty = asyncHandler(
  async (req, res, next) => {
    const property = await Property.findById(req.params.id);
    if (!property) return next(createHttpError(404, 'Property not found'));

    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Property deleted successfully' });
  }
);
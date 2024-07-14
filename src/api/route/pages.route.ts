import {
  createOrUpdatePageDubaiFactNumbers,
  createOrUpdatePageGuideOnRenting,
  createOrUpdatePageGuideToSelling,
  createOrUpdatePageWhyInvestOffPlan,
  getPageDubaiFactNumbers,
  getPageGuideOnRenting,
  getPageGuideToSelling,
  getPageWhyInvestOffPlan,
} from './../controller/pages.controller'
import { Router } from 'express'
import {
  createOrUpdatePageAbout,
  createOrUpdatePageInvestDubaiEstate,
  createOrUpdatePageWhyDubai,
  getPageAbout,
  getPageInvestDubaiEstate,
  getPageWhyDubai,
} from '../controller/pages.controller'
import { upload } from '../service/multer'

export const pageRouter = Router()

//about page
pageRouter.get('/about-page', getPageAbout)
pageRouter.post(
  '/about-page',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageAbout
)
pageRouter.patch(
  '/about-page',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageAbout
)

//why dubai page
pageRouter.get('/why-dubai-page', getPageWhyDubai)
pageRouter.post(
  '/why-dubai-page',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageWhyDubai
)
pageRouter.patch(
  '/why-dubai-page',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageWhyDubai
)

//invest dubai estate page
pageRouter.get('/invest-dubai-estate', getPageInvestDubaiEstate)
pageRouter.post(
  '/invest-dubai-estate',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageInvestDubaiEstate
)
pageRouter.patch(
  '/invest-dubai-estate',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageInvestDubaiEstate
)

//dubai fact numbers page
pageRouter.get('/dubai-fact-numbers', getPageDubaiFactNumbers)
pageRouter.post(
  '/dubai-fact-numbers',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageDubaiFactNumbers
)
pageRouter.patch(
  '/dubai-fact-numbers',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageDubaiFactNumbers
)

//why invest in off plan page
pageRouter.get('/why-invest-off-plan', getPageWhyInvestOffPlan)
pageRouter.post(
  '/why-invest-off-plan',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageWhyInvestOffPlan
)
pageRouter.patch(
  '/why-invest-off-plan',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageWhyInvestOffPlan
)

//guide on renting page
pageRouter.get('/guide-on-renting', getPageGuideOnRenting)
pageRouter.post(
  '/guide-on-renting',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageGuideOnRenting
)
pageRouter.patch(
  '/guide-on-renting',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageGuideOnRenting
)

//guide to selling page
pageRouter.get('/guide-to-selling', getPageGuideToSelling)
pageRouter.post(
  '/guide-to-selling',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageGuideToSelling
)
pageRouter.patch(
  '/guide-to-selling',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  createOrUpdatePageGuideToSelling
)

export type AmenityType = {
  _id?: string
  title: string
  status: boolean
}

export type DubaiDeveloperType = {
  _id?: string
  title: string
  status: boolean
  image: string | File
}

export type DubaiAreaType = {
  _id?: string
  title: string
  status: boolean
}

export type SubscriberType = {
  _id?: string
  email: string
  name: string
  status: boolean
}

export type AgentType = {
  _id?: string
  email: string
  name: string
  status: boolean
  image: string | File
  phone: string
  biography: string
  designation: string
  languages: string
}

export type PageType = {
  _id?: string
  title: string
  description: string
  meta: string
  image: string | File
}

export type BlogType = {
  _id?: string
  title: string
  description: string
  meta: string
  image: string | File
  createdAt?: String
}

export type AdminType = {
  _id?: String
  email: String
  password: String
}

export type LogType = {
  _id?: String
  email: String
  createdAt?: String
}

export type PropertyType = {
  type: string
  title: string
  propertyType: string
  googleMap: string
  price: number
  beds: number
  baths: number
  size: number
  furnishedType: string
  propertyAgent: string
  bannerImage: string | File  // URL of the uploaded banner image
  thumbnailImages: string[]  | [File]// Array of URLs for the uploaded thumbnail images
  videoUrl: string
  featured: string
  status: boolean
  meta: string
  description: string
}

"use server"

import { prisma } from "./prisma"
import { makeTagsObjectArrayFromTagsArray } from "./utils"


export const addTag = async (data: FormData) => {
  const formData = Object.fromEntries(data)

  const tagsString = formData.tags as string
  const rawTags = tagsString.split(",")
  const tags = rawTags.map( rawTag => rawTag.trim())

  const createManyTags = await prisma.tag.createMany({
    data: makeTagsObjectArrayFromTagsArray(tags)
  })
  console.log(createManyTags)
  return { message: "tag added" }
}

export const getAllTags = async () => {
  return await prisma.tag.findMany()
}



'use server'

import { prisma } from "./prisma"

export const addTag = async (data: FormData) => {
    const formData = Object.fromEntries(data)

    const tagsString = formData.tags as string
    const tags = tagsString.split(',')

    const dataToStore = tags.map((tag) => {return { name: tag }})

    const createManyTags = await prisma.tag.createMany({
        data: dataToStore
    })
    console.log(createManyTags)
    return {message: "tag added"}
}
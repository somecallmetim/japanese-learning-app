/* eslint-disable @typescript-eslint/ban-ts-comment */
'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { makeTagsObjectArrayFromTagsArray } from "./utils"
import { tag } from "@prisma/client"

export const addNewWord = async (data: FormData) => {
    const formData = Object.fromEntries(data)
    console.log(formData)
    const vocabularyWord = {
      japanese: formData.japaneseVocabWord,
      english: formData.englishDef,
      // @ts-ignore
      tags: JSON.parse(formData.tags)
    }
    console.log(vocabularyWord)
  
    const japanese = formData.japaneseVocabWord as string
    const english = formData.englishDef as string
    // @ts-ignore
    const tags = JSON.parse(formData.tags) as string[]
  
    const tagsObjectArray = makeTagsObjectArrayFromTagsArray(tags)
    console.log(tagsObjectArray)
  
    const committedWord = await prisma.vocabularyWord.create({
      data: {
        japanese: japanese,
        english: english,
        tags: {
          connect:
            tagsObjectArray
        }
      }
    })
  
    console.log(committedWord)
    revalidatePath("/addWord")
  }

  export const addMultipleWords = async (data: FormData) => {
    console.log(data)
    const formData = Object.fromEntries(data)
    console.log(formData)
    const japaneseWordsString = (formData.japaneseVocabWordList as string).replaceAll('"', "")
    console.log(japaneseWordsString)
    const japaneseWordList = japaneseWordsString.split(' ')
    console.log(japaneseWordList)
  }

  export const getAllWords = async () => {
    return await prisma.vocabularyWord.findMany({
        include: {
            tags: true
        }
    })
  }

  export const getAllWordsWithTag = async (tagName: string) => {
    console.log(`tagName: ${tagName}`)
    const results = await prisma.tag.findUnique({
      where: {
        name: tagName
      },
      include: {
        vocabularyWords: true
      }
    })
    console.log(results)
    return results
  }
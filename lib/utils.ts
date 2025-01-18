import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const makeTagsObjectArrayFromTagsArray = (arrayOfTags: string[]) => {
  return arrayOfTags.map((tag) => {
    return { name: tag }
  })
}

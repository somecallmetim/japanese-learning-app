import { tag, vocabularyWord } from "@prisma/client";

export type VocabularyWordWithTagsType = vocabularyWord & {
    tags: Array<tag>
}

export type TagWithVocabularyWordsType = tag & { vocabularyWords: Array<vocabularyWord> | null}
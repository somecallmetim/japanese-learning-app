import { TagWithVocabularyWordsType } from "@/lib/types"
import { getAllWordsWithTag } from "@/lib/wordActions"
import Flashcard from "./Flashcard"
import { vocabularyWord } from "@prisma/client";

const shuffle = (array: vocabularyWord[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}

const Flashcards = async () => {
  const tagName: TagWithVocabularyWordsType | null = await getAllWordsWithTag("place")

  // present tense
  // future tense
  // past tense

  const shuffledVocabularyWords = shuffle(tagName?.vocabularyWords ?? [])
  
  return (
    <>
      {/* {tagName && tagName.vocabularyWords?.map((vocabularyWord) => <div key={1}>{`${vocabularyWord.japanese}`}</div>)} */}
      <Flashcard vocabularyWords={shuffledVocabularyWords} />
    </>
  )
}
export default Flashcards
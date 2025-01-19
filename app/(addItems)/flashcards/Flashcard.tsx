'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { vocabularyWord } from "@prisma/client"
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  vocabularyWords: vocabularyWord[] | undefined | null
}

type TenseTrackingObject = { 
  tense: "present tense" | "past tense" | "progressive tense" 
  conjVerb: string 
}



const Flashcard = ({ vocabularyWords }: Props) => {
  const [index, setIndex] = useState<number>(0)
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const [presentTenseBool, setPresentTenseBool] = useState<boolean>(true)
  const [pastTenseBool, setPastTenseBool] = useState<boolean>(false)
  const [progressiveTenseBool, setProgressiveTenseBool] = useState<boolean>(false)
  const [currentTense, setCurrentTense] = useState<TenseTrackingObject>({ tense: "present tense", conjVerb: "いきます" })

  const tenseArray: Array<TenseTrackingObject> = []

  if (presentTenseBool) tenseArray.push({ tense: "present tense", conjVerb: "いきます" })
  if (pastTenseBool) tenseArray.push({ tense: "past tense", conjVerb: "いきました" })
  if (progressiveTenseBool) tenseArray.push({ tense: "progressive tense", conjVerb: "いっています" })


  const router = useRouter()

  if (vocabularyWords) {
    const englishTranslation = currentTense.tense === "present tense" ? `going to the ${vocabularyWords[index].english}` :
      currentTense.tense === `past tense` ? `went to the ${vocabularyWords[index].english}` :
        `am/is/are going to the ${vocabularyWords[index].english}`

    const correctAnswerClick = () => {
      if (index < vocabularyWords?.length - 1) {
        setIndex((currentIndex) => currentIndex + 1)
        setCurrentTense(tenseArray[Math.floor(Math.random() * tenseArray.length)])
        setIsFlipped(false)
      } else {
        setIndex(0)
        setCurrentTense(tenseArray[Math.floor(Math.random() * tenseArray.length)])
        setIsFlipped(false)
        router.refresh()
      }
    }

    const inCorrectAnswerClick = () => {
      vocabularyWords[vocabularyWords.length] = vocabularyWords[index]
      setIndex((currentIndex) => currentIndex + 1)
      setCurrentTense(tenseArray[Math.floor(Math.random() * tenseArray.length)])
      setIsFlipped(false)
    }

    const presentTenseOnChange = () => {
      if (tenseArray.length === 1 && presentTenseBool) {
        setPresentTenseBool(true)
      } else {
        setPresentTenseBool(!presentTenseBool)
      }
    }

    const pastTenseOnChange = () => {
      if (tenseArray.length === 1 && pastTenseBool) {
        setPresentTenseBool(true)
      }
      setPastTenseBool(!pastTenseBool)
    }

    const progressiveTenseOnChange = () => {
      if (tenseArray.length === 1 && progressiveTenseBool) {
        setPresentTenseBool(true)
      }
      setProgressiveTenseBool(!progressiveTenseBool)
    }

    const handleFlip = () => {
      setIsFlipped(!isFlipped)
    }

    console.log(isFlipped)

    return (
      <>
        <div style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-center text-hotpink-200 text-xl mb-4" >{`${index + 1} of ${vocabularyWords.length}`}</div>
        <div className="flex justify-between mb-4">
          <div className="flex">
            <Label className="mr-1.5 text-hotpink-800">Present Tense</Label>
            <div className="-mt-1"><Checkbox checked={presentTenseBool} value={"presentTense"} onClick={presentTenseOnChange} /></div>
          </div>
          <div className="flex">
            <Label className="mr-1.5 text-hotpink-800">Past Tense</Label>
            <div className="-mt-1"><Checkbox checked={pastTenseBool} value={"pastTense"} onClick={pastTenseOnChange} /></div>
          </div>
          <div className="flex">
            <Label className="mr-1.5 text-hotpink-800">Progressive Tense</Label>
            <div className="-mt-1"><Checkbox checked={progressiveTenseBool} value={"progressiveTense"} onClick={progressiveTenseOnChange} /></div>
          </div>
        </div>

        <div className="group h-32 w-full mx-auto mb-4 [perspective:1000px] cursor-pointer" onClick={handleFlip}>
          <div className={`relative h-full w-full rounded-md transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateX(180deg)]" : ""}`}>
            <div className="absolute inset-0  ">
              <div className={`flex h-full w-full rounded-md items-center justify-center
              bg-hotpink-50 shadow-sm shadow-skyBlue-400 p-1.5`}>
                <div className="mb-2 text-2xl text-skyBlue-500">{`${vocabularyWords[index]?.japanese}, いく, ${currentTense.tense}`}</div>
              </div>
            </div>

            <div className={`absolute inset-0 h-full w-full [transform:rotateX(180deg)] [backface-visibility:hidden]`}>
              <div className={` h-full w-full rounded-md  
              bg-skyBlue-400 shadow-sm shadow-hotpink-50 p-1.5`}>
                <div style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-center mb-2 text-3xl text-hotpink-300 ">{`${vocabularyWords[index].japanese} に ${currentTense.conjVerb}`}</div>
                <div style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-center mb-2 text-xl text-hotpink-300 ">{englishTranslation}</div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex justify-between">
          <button type="button" onClick={inCorrectAnswerClick} className="rounded-md px-2 border-2 border-skyBlue-600 bg-skyBlue-600 text-hotpink-200 text-lg 
          hover:bg-hotpink-200 hover:text-skyBlue-600 hover:border-hotpink-200
          active:bg-hotpink-50 active:text-skyBlue-600">Incorrect</button>
          <button type="button" onClick={correctAnswerClick} className="rounded-md px-2 border-2 border-hotpink-200 bg-hotpink-200 text-skyBlue-600 text-lg 
          hover:bg-skyBlue-600 hover:text-hotpink-200 hover:border-skyBlue-600 
          active:bg-hotpink-50 active:text-skyBlue-600">Correct</button>
        </div>
      </>
    )
  }

  return (
    <div>Flashcard</div>
  )
}
export default Flashcard
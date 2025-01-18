import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { VocabularyWordWithTagsType } from "@/lib/types"
import { getAllWords } from "@/lib/wordActions"


const ShowAllWords = async () => {
  const allWords: Array<VocabularyWordWithTagsType> = await getAllWords()

  const length = allWords.length
  console.log("...................................")
  console.log(length)
  console.log("...................................")

  return (
    <div>
      <div className="mb-2">
        <Label style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-hotpink-200 text-lg pl-1">Search</Label>
        <Input type="text" className="text-hotpink-300 placeholder:text-grayViolet-400"/>
      </div>
      {allWords.slice(0,4).map((word: VocabularyWordWithTagsType) => {
        return (
          <div key={word.id} className=" mb-2 bg-blue-100 rounded-md p-2 shadow-sm shadow-skyBlue-400">
            <div className="flex justify-around text-lg text-hotpink-500 mb-2">
              <div>{word.japanese}</div>
              <div>{word.english}</div>
            </div>
            <div className="flex justify-evenly">
              {word.tags.map((tag) => {
                return <div key={tag.id} className="text-xs text-grayViolet-400">{tag.name}</div>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ShowAllWords
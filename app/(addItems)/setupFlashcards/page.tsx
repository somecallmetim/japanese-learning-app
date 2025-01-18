import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const SetupFlashcards = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <Label className="mr-1.5 text-hotpink-800">Present Tense</Label>
          <div className="-mt-1"><Checkbox /></div>
        </div>
        <div className="flex">
          <Label className="mr-1.5 text-hotpink-800">Past Tense</Label>
          <div className="-mt-1"><Checkbox /></div>
        </div>
        <div className="flex">
          <Label className="mr-1.5 text-hotpink-800">Future Tense</Label>
          <div className="-mt-1"><Checkbox /></div>
        </div>
      </div>
    </>
  )
}
export default SetupFlashcards
import { getAllTags } from "@/lib/tagActions"
import AddMultipleWordsForm from "./AddMultipleWordsForm"

const AddMultipleWords = async () => {

  const tags = await getAllTags()
  return (
    <AddMultipleWordsForm tags={tags} />
  )
}
export default AddMultipleWords
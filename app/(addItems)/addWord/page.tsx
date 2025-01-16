import { getAllTags } from "@/lib/tagActions"
import AddWordForm from "./AddWordForm"

const AddWordPage = async () => {

  const tags = await getAllTags()

  return (
     <AddWordForm tags={tags} />
  )
}
export default AddWordPage

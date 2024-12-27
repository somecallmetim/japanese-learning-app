import { getAllTags } from "@/lib/actions"
import AddWordForm from "./AddWordForm"

const AddWordPage = async () => {

  const tags = await getAllTags()

  return (
     <AddWordForm tags={tags} />
  )
}
export default AddWordPage

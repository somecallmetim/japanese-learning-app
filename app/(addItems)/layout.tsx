import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const AddWordLayout = ({ children }: Props) => {
    return (
        <div className="h-[500px] w-[700px] bg-skyBlue-50 p-10 rounded-lg shadow-sm shadow-grayViolet-900">
            {children}
        </div>
    )
}
export default AddWordLayout
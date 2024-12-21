import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div
      style={{ textShadow: "#6869c3 4px 4px 1px" }}
      className="flex flex-col h-[400px] justify-between text-hotpink-300 text-center"
    >
      <Card className="bg-skyBlue-400/10 border-none">
        <div className="text-5xl text-hotpink-300 flex justify-center">
          <div>kawaii kana</div>
        </div>
      </Card>

      <Card className="text-4xl border-none bg-skyBlue-400/30 text-hotpink-300 px-2">
        <div>& other Japanese</div>
        <div>Grammar</div>
      </Card>
    </div>
  )
}

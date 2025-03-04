import { Button } from "@/components/ui/button";

const SnippetCard = ({ title, date }: { title: string; date: Date }) => {
  return (
    <div className="border-amber-700 border-2 flex justify-between p-5 rounded-xl flex-1 min-w-[100%] sm:min-w-[45%]">
        <div><div>{title}</div><div>{date.toLocaleString()}</div></div>

        <Button variant="outline" className="cursor-pointer">View</Button>
    </div>
  )
}

export default SnippetCard
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SnippetCard = ({ title, date, id }: { title: string; date: Date; id: number | string }) => {
  return (
    <div className="border-amber-700 border-2 flex justify-between p-5 rounded-xl flex-1 min-w-[100%] sm:min-w-[45%]">
        <div><div>{title}</div><div>{date.toLocaleString()}</div></div>

        <Link href={`${id}`}><Button variant="outline" className="cursor-pointer">View</Button></Link>
    </div>
  )
}

export default SnippetCard
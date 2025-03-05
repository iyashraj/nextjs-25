import { Button } from "@/components/ui/button";
import SnippetCard from "@/components/snippetCard";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippet.findMany()
  console.log(snippets)

  return (
    <div className="relative">
      <div className="flex justify-between mt-4 mb-2 pl-1 pr-1">
        <p className="text-xl font-semibold text-gray-700">Snippets</p>
        <Link href={"snippet/new"}>
          <Button
            variant="outline"
            className="bg-gray-700 text-white cursor-pointer"
          >
            Add
          </Button>
        </Link>
      </div>
      {/* snippet card content */}
      <div className="flex flex-wrap gap-4 justify-start sm:justify-between w-full max-h-[70vh] overflow-y-auto">
        {snippets.length ? (
          snippets?.map((snippet, index) => (
            <SnippetCard key={index} title={snippet?.title} date={snippet?.updatedAt} id={snippet?.id}/>
          ))
        ) : (
          <div className="pl-3 pr-1 text-lg"> - No code snippet found!</div>
        )}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteSnippet } from "@/actions";

const SnippetDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const snippetById = await prisma.snippet.findUnique({
    where: {
      id: +id,
    },
  });
  if (!snippetById)
    return (
      <div className="mt-5 ml-2 text-xl font-semibold text-gray-700">
        Snippet Not Found!
      </div>
    );

  const deleteSnippetAction = deleteSnippet.bind(null, snippetById.id);

  console.log(snippetById);
  return (
    <div className="flex flex-col gap-3">
      <div className="mt-5 ml-2 flex justify-between align-middle">
        <h1 className=" text-xl font-semibold text-gray-700">
          {snippetById?.title}
        </h1>
        <div className="flex gap-2">
          <Link href={`${snippetById.id}/edit`}>
            <Button variant={"outline"} className="cursor-pointer">
              Edit
            </Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button
              variant={"outline"}
              className="bg-red-600 text-slate-100 border-red-600 border-2 cursor-pointer"
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{snippetById.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;

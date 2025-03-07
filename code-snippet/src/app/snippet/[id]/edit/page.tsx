import SnippetEditor from "@/components/snippetEditor";
import { prisma } from "@/lib/prisma";
import { Editor } from "@monaco-editor/react";

const SnippetEditPage = async ({
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
  return (
    <div>
      <SnippetEditor snippet={snippetById}/>
    </div>
  );
};

export default SnippetEditPage;

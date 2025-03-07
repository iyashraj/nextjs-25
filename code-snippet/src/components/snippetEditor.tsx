"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
const SnippetEditor = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  return (
    <div>
      <form className="mt-2 flex flex-col gap-3">
        <div className="flex justify-between"><span className="text-xl font-semibold text-gray-700">Edit your code : </span><Button variant={"outline"} className="w-[10%] self-end">Save</Button></div>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          // onMount={handleEditorDidMount}
        />
      </form>
    </div>
  );
};

export default SnippetEditor;

"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import {  useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const SnippetEditor = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  
  const handleCodeChange = (value : string|undefined) => {
    if(typeof value === "string")
      setCode(value)
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)
  return (
    <div>
      <form action={saveSnippetAction} className="mt-2 flex flex-col gap-3">
        <div className="flex justify-between"><span className="text-xl font-semibold text-gray-700">Edit your code : </span><Button variant={"outline"} className="w-[10%] self-end">Save</Button></div>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleCodeChange}
        />
      </form>
    </div>
  );
};

export default SnippetEditor;

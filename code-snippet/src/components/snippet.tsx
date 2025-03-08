'use client';

import { Editor } from "@monaco-editor/react";
import React from "react";

interface SnippetProps {
  handleCodeChange: (value: string | undefined) => void;
}

const Snippet = ({ handleCodeChange }: SnippetProps) => {
  return (
    <div className="border-2 rounded-xl">
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={""}
        theme="vs-dark"
        onChange={handleCodeChange}
        className="rounded-xl"
      />
    </div>
  );
};

export default Snippet;

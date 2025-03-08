"use client";

import Snippet from "@/components/snippet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSnippet } from "@/actions";
import { useState } from "react";

const AddSnippetPage = () => {
  const [snippet, setSnippet] = useState({
    title: "",
    code: "",
  });

  const handleCodeChange = (val: string | undefined) => {
    console.log(val, "from page");
    setSnippet((prev) => ({
      title: prev.title,
      code: val ?? "",
    }));
  };

  const createSnippetAction = createSnippet.bind(null, snippet);

  return (
    <form
      className="border-amber-700 border-2 flex flex-col p-5 rounded-xl mt-5 gap-6"
      action={createSnippetAction}
    >
      <div className="gap-2 flex flex-col">
        <Label>Title</Label>
        <Input
          aria-invalid="true"
          className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive outline-none"
          type="text"
          name="title"
          id="title"
          onChange={(e) =>
            setSnippet((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>
      <div className="gap-2 flex flex-col">
        <Label>Code</Label>
        <Snippet handleCodeChange={handleCodeChange} />
      </div>
      <Button
        type="submit"
        variant={"outline"}
        className="w-[100px] cursor-pointer hover:bg-gray-700 hover:text-white"
      >
        Submit
      </Button>
    </form>
  );
};

export default AddSnippetPage;

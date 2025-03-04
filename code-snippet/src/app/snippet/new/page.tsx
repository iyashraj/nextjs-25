import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const AddSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server"; // use server directive
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    console.log(title, code);

    const createdSnippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(createdSnippet);
    redirect("/");
  }

  return (
    <form
      className="border-amber-700 border-2 flex flex-col p-5 rounded-xl mt-5 gap-6"
      action={createSnippet}
    >
      <div className="gap-2 flex flex-col">
        <Label>Title</Label>
        <Input
          aria-invalid="true"
          className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive outline-none"
          type="text"
          name="title"
          id="title"
        />
      </div>
      <div className="gap-2 flex flex-col">
        <Label>Code</Label>
        <Textarea
          name="code"
          id="code"
          className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive outline-none"
        />
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

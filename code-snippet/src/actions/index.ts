"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";

// for updating a existing snippet
export const saveSnippet = async (id:number, code : string) => {
    const snippet = await prisma.snippet.update({
        where: {
            id
        },
        data: {
          code
        }
      });
    console.log(snippet)
    redirect(`/snippet/${id}`);
}

// for deleting a new snippet
export const deleteSnippet =async (id : number) => {
  await prisma.snippet.delete({
    where: {
      id 
    }
  })
  redirect('/')
} 

// for creating a new snippet
export async function createSnippet(snippet : {title : string, code: string}) {
  const title = snippet.title as string;
  const code = snippet.code as string;

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
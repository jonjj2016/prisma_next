import prisma from "@/lib/prisma"

export const POST = async (req: Request) => {
  const posts = await prisma.post.findMany()
  return new Response(JSON.stringify(posts))
}

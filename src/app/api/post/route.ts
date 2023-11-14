import prisma from "@/lib/prisma"

export const GET = async (req: Request) => {
  const posts = await prisma.post.findMany()
  return new Response(JSON.stringify(posts))
}
export const POST = async (req: Request) => {
  const body = await req.json()
  const post = await prisma.post.create({ data: body })
  return new Response(JSON.stringify(post))
}
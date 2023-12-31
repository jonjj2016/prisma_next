import prisma from "@/lib/prisma"

export const POST = async (req: Request) => {
  const body = await req.json()
  const user = await prisma.user.create({ data: body })
  return new Response(JSON.stringify(user))
}
export const GET = async (req: Request) => {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: "a",
          startsWith: "s",
        },
      },
      include: {
        posts: true,
      },
    })
  return new Response(JSON.stringify(users))
}

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getUser(username: string) { 
    const user = await prisma.user.findFirst({
        where: {
            username
        }
    })
    console.log(user);
}

getUser("anujtiwari@gmail.com");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
      firstName: true
    }
  });
  console.log(res);
}

insertUser("anujtiwari3@gmail.com", "123456", "anuj", "tiwari");

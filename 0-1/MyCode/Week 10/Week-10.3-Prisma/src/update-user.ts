import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UpdateParams = {
  firstName: string;
  lastName: string;
};

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

updateUser("anujtiwari@gmail.com", {
  firstName: "anuj9111",
  lastName: "tiwari",
})
  .then(() => {
    console.log("User Updated");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query"],
});

async function main() {
  let res = await prisma.post.findMany({
    take: 2,
    skip: 10,
  });
  console.log(res);
}

main()
  .then(async () => {
    console.log("done with the query");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      email,
    },
  });
  console.log(response);
}
// insertUser("test", "test", "test", "test", "test");


async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);

}

createTodo(1, "go to gym", "go to gym and do 10 pushups");


async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            id: true,
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);



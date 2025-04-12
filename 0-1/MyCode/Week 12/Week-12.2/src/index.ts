// 1. Pick<>
// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdatedProps = Pick<User, "name" | "age" | "email">;

// function UpdateUser(updatedProps : UpdatedProps) {
//     // hit the database ts update the user
// }

// 2. Partial<>
// interface User {
//   id: string;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdateProps = Pick<User, "name" | "age" | "email">;

// type UpdatePropsOptional = Partial<UpdateProps>;

// function updateUser(updatedProps: UpdatePropsOptional) {
//   // hit the database tp update the user
// }
// updateUser({});

// 3. Readonly<>
// interface Config {
//      endpoint: string;
//      apiKey: string;
//   }

//   const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: 'abcdef123456',
//   };

//   // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// 4.1 Records<> -> Typescript spacific
// type Users = Record<string, { age: number; name: string; email: string }>;

// const users: Users = {
//   "ras@qdr1": { age: 21, name: "Anuj", email: "ras@qdr1" },
//   "ras@qdr2": { age: 24, name: "Aman", email: "ras@qdr2" },
// };

// console.log(users["ras@qdr1"]);

// 4.2 Map -> Not typescript spacific
// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// const users = new Map<string, User>();
// users.set("ras@qdr1", { name: "Anuj", age: 21, email: "ras@qdr1" });
// users.set("ras@qdr2", { name: "Aman", age: 24, email: "ras@qdr2" });

// const user = users.get("ras@qdr1");
// console.log(user);

// 5. Exclude<>
// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'> //  'click' | 'mousemove'

// const handelEvent = (event: ExcludeEvent) => {
//   console.log(`handling event: ${event}`);
// };

// handelEvent('scroll');

// 6. Type inference in zod
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.string().optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);

import { PrismaClient } from "@prisma/client";

// this code reach the backend and get data from database
const client = new PrismaClient();

async function fetchData() {
  const user = await client.user.findFirst();

  //database logic
  return {
    username: user?.username,
    name: "Anuj",
  };
}


// this is an async component its run on the server 
export default async function User() {
  const UserDetails = await fetchData();

  // this is the final render which only reach the frontend
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="p-8 border rounded">
          <div>Name: {UserDetails?.name}</div>

          {UserDetails?.username}
        </div>
      </div>
    </div>
  );
}

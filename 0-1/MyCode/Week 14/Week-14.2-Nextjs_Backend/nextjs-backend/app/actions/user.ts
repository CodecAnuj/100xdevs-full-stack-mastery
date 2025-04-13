// Note: wwe create post endpoint here which /api/user is converted in server actions

// import client from "@/db"
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   solve()
// }

// function solve() {
//   // extract the body
//   const body = await req.json();
//   // console.log(body)
//   // header
//   // console.log(req.headers.get("authorization"))
//   // query parameters
//   // console.log(req.nextUrl.searchParams.get("name"))

//   try {
//     await client.user.create({
//       data: {
//         username: body.username,
//         password: body.password,
//       },
//     });
//     return NextResponse.json({
//       body,
//     });
//   } catch (e) {
//     console.log(e);
//     return NextResponse.json(
//       {
//         message: "Error while sign up",
//       },
//       {
//         status: 411,
//       }
//     );
//   }

//   // // store the body in the database

//   // // hit the database with username, password
//   // return NextResponse.json({
//   //   message: "You are logged in!",
//   // });
// }


// server action 
"use server" // must to do this whenever create a server actions

import client from "@/db";

export async function signup(username: string, password: string) {
    try {
      await client.user.create({
        data: {
          username: username,
          password: password,
        },
      });
      return true
    } catch (e) {
      return false
    }
}
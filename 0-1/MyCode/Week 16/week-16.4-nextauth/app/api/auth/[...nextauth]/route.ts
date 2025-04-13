import { NEXT_AUTH_config } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH_config);

export const GET = handler;
export const POST = handler;

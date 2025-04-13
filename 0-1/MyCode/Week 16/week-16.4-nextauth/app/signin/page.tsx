"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function() {
    const router = useRouter();
    return <div>
        <button onClick={async () => {
            await signIn("google");
        }}>login with google</button>
        <button onClick={async () => {
            await signIn("github");
        }}>login with github</button>
        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false
            })
            console.log(res);
            router.push("/")
        }}>login with email</button>

    </div>
}
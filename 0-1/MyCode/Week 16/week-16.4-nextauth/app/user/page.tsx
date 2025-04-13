
import { getServerSession } from "next-auth";
import { Appbar } from "../components/Appbar";
import { NEXT_AUTH_config } from "../lib/auth";

export default async function() {
    const session = await getServerSession(NEXT_AUTH_config);
    return <div>
        <Appbar />
        User component
        {JSON.stringify(session)}
    </div>
}
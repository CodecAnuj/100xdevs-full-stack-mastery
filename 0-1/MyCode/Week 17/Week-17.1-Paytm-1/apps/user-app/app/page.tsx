
import {PrismaClient} from "@repo/db/client"
const client = new PrismaClient();

export default function Page() {
  return (
   <div className="text-2xl" >hi there</div>
  );
}

import { auth } from "@/auth";
import SignOut from "@/components/SignOut";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";


export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div >
      {
        session?.user ? (
          <div className="flex justify-between">
            <UserInfo user={session?.user} />
            <SignOut />
          </div>
        ) : (
          <div className="flex justify-between">
            <p className="text-lg"><b>No logged in user!</b></p>
            <Link href={"/login"} className="px-2 py-1 rounded-md bg-gray-800 text-white">Sign in</Link>
          </div>
        )
      }
    </div>
  );
}

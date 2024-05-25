import { doSignInWithGoogle } from "@/actions";

export default function SignInWithGoogle() {
  return (
    <form action={doSignInWithGoogle} className="mt-5">
        <button className="w-full py-1 rounded-md bg-blue-500 text-white">Sign in with Google</button>
    </form>
  )
}

import { doSignInWithGithub } from "@/actions";


export default function SignInWithGithub() {
    return (
        <form action={doSignInWithGithub}>
            <button className="w-full py-1 rounded-md bg-gray-800 text-white">Sign in with Github</button>
        </form>
    )
}

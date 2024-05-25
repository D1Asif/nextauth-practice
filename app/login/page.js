import LoginForm from '@/components/LoginForm'
import SignInWithGithub from '@/components/SignInWithGithub'
import SignInWithGoogle from '@/components/SignInWithGoogle'
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
    return (
        <div className='flex justify-center flex-col w-[250px] mx-auto gap-3'>
            <LoginForm />
            <SignInWithGoogle />
            <SignInWithGithub />
            <p className="text-center">Go back to <Link href="/"><u>home</u></Link></p>
        </div>
    )
}

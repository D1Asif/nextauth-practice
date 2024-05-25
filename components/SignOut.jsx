import { doSignOut } from '@/actions'
import React from 'react'

export default function SignOut() {
  return (
    <form action={doSignOut}>
        <button type='submit' className="px-2 py-1 rounded-md bg-gray-800 text-white">Sign Out</button>
    </form>
  )
}

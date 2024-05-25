"use client";

import { doSignInWithCredentials } from "@/actions";
import { useState } from "react";

export default function LoginForm() {
    const [error, setError] = useState("");

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            await doSignInWithCredentials(formData);

        } catch(err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h2 className="font-bold text-center text-xl">Login</h2>
            {error && <p className="text-sm text-center text-red-400 my-2">
                {error}
            </p>}
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input className="border" type="email" name="email" id="email" />

                <label htmlFor="password">Password</label>
                <input className="border my-2" type="password" name="password" id="password" />

                <button className="px-2 py-1 rounded-md bg-gray-800 text-white">Log in</button>
            </form>
        </div>
    )
}

"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from 'next/navigation';

export async function doSignInWithGoogle() {
    await signIn("google");
}

export async function doSignInWithGithub() {
    await signIn("github");
}

export async function doSignOut() {
    await signOut();
}

export async function doSignInWithCredentials(formData) {
    try {
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });
    } catch(err) {
        throw new Error("Invalid login")
    }
}
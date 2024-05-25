import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/mongoClientPromise"
import { userModel } from "./models/user-model"
import { connectDB } from "./lib/mongo"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt'
    },
    providers: [
        Google,
        GitHub,
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                if (credentials === null) return null;

                await connectDB();
                try {
                    const user = await userModel.findOne({ email: credentials?.email });
                    console.log(user);

                    if (user) {
                        const isMatch = user?.password === credentials?.password;
                        console.log(isMatch);

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Please provide a valid email and password");
                        }
                    } else {
                        throw new Error("No user found");
                    }
                } catch(err) {
                    console.log(err);
                    throw err;
                }
            }
        })
    ]
})
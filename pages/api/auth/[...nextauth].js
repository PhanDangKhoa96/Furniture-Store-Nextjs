import NextAuth from "next-auth/next";
import {SanityAdapter} from "next-auth-sanity";
import GoogleProvider from "next-auth/providers/google";
import {sanityClient} from "../../../sanity";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CILENT_SECRET,
        }),
        // ...add more providers here
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: SanityAdapter(sanityClient),
};
export default NextAuth(authOptions);

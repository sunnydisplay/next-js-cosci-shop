import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db"; // your drizzle instance

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", // or "mysql", "sqlite"
    }),
    emailAndPassword: {
        enabled:true,
        autoSignIn:false,
        requireEmailVerification:false,
        minPasswordLength:8
    }
});
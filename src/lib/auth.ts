import { timingSafeEqual } from "crypto";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { validateEnv } from "@/lib/env";

function safeComparePassword(input: string, expected: string): boolean {
  const inputBuf = Buffer.from(input);
  const expectedBuf = Buffer.from(expected);

  if (inputBuf.length !== expectedBuf.length) {
    // Constant-time compare against itself to avoid timing leaks
    timingSafeEqual(expectedBuf, expectedBuf);
    return false;
  }

  return timingSafeEqual(inputBuf, expectedBuf);
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        validateEnv();

        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminPassword || !credentials?.password) {
          return null;
        }

        if (!safeComparePassword(credentials.password, adminPassword)) {
          return null;
        }

        return { id: "1", name: "Admin" };
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
};

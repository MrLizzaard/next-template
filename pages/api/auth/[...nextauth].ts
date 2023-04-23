import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [],
};

export default NextAuth({
  providers: [],
  session: {
    strategy: "jwt",

    maxAge: 60 * 60 * 24, // 1day

    generateSessionToken() {
      return "test";
    },
  },
  jwt: {},
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
});

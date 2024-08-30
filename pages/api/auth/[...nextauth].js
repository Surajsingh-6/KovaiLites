import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Replace this with your actual username and password check
        if (credentials.username === process.env.AUTH_USERNAME && credentials.password === process.env.AUTH_PASSWORD) {
          return { id: 1, name: 'Admin', email: 'admin@example.com' }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub
      return session
    },
  },
}

export default NextAuth(authOptions)

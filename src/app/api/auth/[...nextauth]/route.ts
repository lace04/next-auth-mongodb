import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/libs/mongodb';
import User from '@/models/user';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials, req) {
        await connectDB();
        // console.log('authorize', { credentials });
        const userFound = await User.findOne({
          email: credentials?.email,
        }).select('+password');

        if (!userFound) {
          throw new Error('Invalid credentials');
        }

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        );

        if (!passwordMatch) {
          throw new Error('Invalid credentials');
        }
        // console.log('authorize', { userFound });
        return userFound;
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      // console.log(token);
      return token;
    },
    session({ session, token }) {
      // console.log('session', { session, token });
      if (token.user) session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  }
});

export { handler as GET, handler as POST };

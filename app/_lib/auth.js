

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],

	callbacks: {

		authorized({ auth, request }) {

			return !!auth?.user
		}
	},
	pages: {

		signIn: '/login'
	}
};

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig);



/// Backup Variation

// import NextAuth from 'next-auth';
// import Google from 'next-auth/providers/google';

// export const { handlers, auth, signIn, signOut } = NextAuth({
// 	providers: [
// 		Google({
// 			clientId: process.env.AUTH_GOOGLE_ID,
// 			clientSecret: process.env.AUTH_GOOGLE_SECRET,
// 		}),
// 	],
// });

// export const { GET, POST } = handlers;
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const client_id ="877730981350-6v5dk0t54qcmrn61vir2uccjplqnqupd.apps.googleusercontent.com";
const client_secret="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";
const auth_secret="0gJtUuBmVQJJDOS/GGxNkXrcYqiTfUepZhufW9C57+Y=";
// const handler = NextAuth({
//   providers:[
//     //Google Provier
//     GoogleProvider({
//         clientId:process.env.GOOGLE_ID,
//         clientSecret:process.env.GOOGLE_SECRET
//     })
//   ]
// })

export const authOptions: NextAuthOptions = {
    providers:[
        //Google Provier
        GoogleProvider({
            clientId:client_id,
            clientSecret:client_secret,
        }),
      ],
      secret: auth_secret,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
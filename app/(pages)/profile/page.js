import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Head from "next/head";
import { redirect } from 'next/navigation'
//import { useState } from "react";
//import { useSession} from "next-auth/react"

import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]/route";
//import { getServe
export default async function EditProfile() {
  
  const session = await getServerSession(authOptions);
  //const session = await getServerAuthSession(); 
  //const{data:session} = useSession()


  return (
    <main>
    <Head>
      <title>Walkabouts</title>
    </Head>
      {session?AuthUser({session}) : unAuth()}
    </main>
  );
}

//unauthorized
function unAuth(){
  return(
//     <main>
//       <Navbar/>
//       <Hero/>
//     </main>
//   )
    redirect('/login')
  )
}

//Authorized
function AuthUser({session}){
  return(<main>
    <Profile session={session}/>
  </main>)
}

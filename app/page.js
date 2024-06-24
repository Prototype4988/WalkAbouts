
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Head from "next/head";
//import { useState } from "react";
//import { useSession} from "next-auth/react"

import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/route";
//import { getServe
export default async function Home() {
  
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
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}

//Authorized
function AuthUser({session}){
  return(<main>
    <Dashboard session={session}/>
  </main>)
}

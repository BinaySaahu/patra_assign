"use client"
import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "@/firebase";

const Navbar = () => {
  const auth = getAuth(app)
  const router = useRouter()
  const handleSignOut = ()=>{
    auth.signOut().then((result) => {
      router.push('/signup')
    }).catch((e)=>{
      console.log(e)
    })
  }

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        router.push('/')
      }
      else{
        router.push('/signup')
      }
    })
  },[])
  return (
    <div className="flex items-center justify-between bg-[#071829] w-full py-4 border-b px-10 text-white absolute top-0 left-0">
      <h1>
        <span className="text-white mr-2">LO</span>
        <span className="bg-blue-400 font-extrabold text-white p-3 rounded-[10px]">GO</span>
      </h1>
      <h1 className="font-extrabold text-blue-400 cursor-pointer" onClick={handleSignOut}>Sign out</h1>
    </div>
  );
};

export default Navbar;

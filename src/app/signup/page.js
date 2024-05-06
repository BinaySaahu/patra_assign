"use client";

import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app, provider } from "../../firebase";
import Image from "next/image";
import signup_img from "../../../public/signup_img.jpg";
import google from "../../../public/google.png";
import mail from "../../../public/mail.png";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailLogin, setEmailLogin] = useState(false);
  const [isLogin,setIsLogin] = useState(false)
  const auth = getAuth(app);
  const router = useRouter()

  const dataInp = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    setData({ ...data, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User: ", createdUser);
      router.push('/')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        router.push('/')
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLogin = async ()=>{
    e.preventDefault();
    try {
      const createdUser = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User: ", createdUser);
      router.push('/')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }

  }
  console.log(data);
  //   9090923456
  return (
    <div className="bg-[#071829] w-full h-screen flex justify-center items-center">
      <div className="w-full h-full">
        <Image src={signup_img} className="h-full" />
      </div>
      <div className="w-full flex justify-between items-center h-screen p-4 flex-col">
        <div className="text-center">
          <h1>
            <span className="text-white mr-2">LO</span>
            <span className="bg-blue-400 rounded-[10px] font-extrabold text-white p-3">
              GO
            </span>
          </h1>
          <p className="text-white text-[10px] md:text-[20px] mt-5">
            Journey to a trillion miles start from here!!
          </p>
        </div>
        <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg py-10 px-10 rounded-[20px] mt-10 w-[350px] flex flex-col items-center gap-5">
          <h1 className="text-white text-[20px] font-extrabold">Sign up</h1>
          {!emailLogin && (
            <p className="text-white text-[15px]">Choose a sign in method</p>
          )}
          {!emailLogin ? (
            <>
              <button
                className="flex items-center justify-center gap-4 rounded-[10px] border border-[#425568] text-white bg-[#192734] px-2 py-2 w-full"
                onClick={handleGoogleSignin}
              >
                <Image src={google} height={30} width={30} />
                Sign in with google
              </button>
              <button
                className="flex items-center justify-center gap-4 rounded-[10px] border border-[#425568] text-white bg-[#192734] px-2 py-2 w-full"
                onClick={() => setEmailLogin(true)}
              >
                <Image src={mail} height={20} width={20} />
                Sign in with email
              </button>
            </>
          ) : (
            <form
              action=""
              onChange={dataInp}
              onSubmit={isLogin?handleLogin:handleSubmit}
              className="flex items-center justify-between flex-col gap-10 mt-3 w-full"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-2 py-3 border-[#425568] border bg-[#192734] text-white rounded w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="px-2 py-3 border-[#425568] border bg-[#192734] text-white rounded w-full"
              />
              {!isLogin && <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="px-2 py-3 border-[#425568] border bg-[#192734] text-white rounded w-full"
              />}
              <button
                type="submit"
                className="bg-blue-400 text-white rounded px-2 py-2"
              >
                Submit
              </button>
            </form>
          )}
          <div>
            <p className="text-white">
              Already a user?{" "}
              <span href="" className="text-blue-400 cursor-pointer" onClick={(e)=>{e.preventDefault(); setIsLogin(true)}}>
                Login
              </span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;

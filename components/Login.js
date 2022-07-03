import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import logo from "../public/download.jpeg";

const Login = () => {
  const { authenticate, isInitializing } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src={logo}
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce"
        >
          Login to MetaChat
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;

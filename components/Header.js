import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeName from "./ChangeName";
import logo from "../public/download.jpeg";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="p-5 sticky top-0 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className="rounded-full object-cover "
            src={logo}
          />
          {/* <Image /> */}
        </div>

        <div className="text-left lg:text-center col-span-4">
          <div className="relative p-3 h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress={true} username={user.getUsername()} />
          </div>

          <h1 className="text-3xl">Welcome</h1>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeName />
        </div>
      </div>
    </div>
  );
};

export default Header;

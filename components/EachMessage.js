import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

const EachMessage = ({ key, message }) => {
  console.log(message);

  const { user } = useMoralis();
  const isUserMsg = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMsg && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMsg && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMsg
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>

      <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMsg&& 'order-first pr-1'}`} datetime={message.createdAt} />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMsg ? "text-pink-300" : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default EachMessage;

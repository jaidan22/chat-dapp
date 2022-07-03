import React, { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMsg = ({ eomref }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMsg = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // SUCCESS
        },
        (error) => {
          console.log(error);
        }
      );

    eomref.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-500">
      <input
        className="flex-grow outline-none pr-5 bg-transparent text-white  placeholder-gray-500 border-none"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type somthing"
      />
      <button
        type="submit"
        onClick={sendMsg}
        className="text-pink-500 font-bold "
      >
        Send
      </button>
    </form>
  );
};

export default SendMsg;

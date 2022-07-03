import React from "react";
import { useMoralis } from "react-moralis";

const ChangeName = () => {
  const { setUserData, isUserUpdating, user, userError } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter new Username (current : ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-10 absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeName;

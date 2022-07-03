import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import EachMessage from "./EachMessage";
import SendMsg from "./SendMsg";

const MINS_DURATION = 15;

const Message = () => {
  const { user } = useMoralis();
  const eomref = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt"),
        // .greaterThan(
        //   "createdAt",
        //   new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        // ),
    [],
    {
      live: true,
    }
  );

  console.log(data);

  return (
    <div className="pb-56 ">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <EachMessage key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMsg eomref={eomref} />
      </div>

      <div ref={eomref} className="text-gray-400 text-center mt-5">
        <p>You are up to date {user.getUsername()}</p>
      </div>
    </div>
  );
};

export default Message;

import React, { useState, useEffect } from "react";
import { Chats } from "./data";
import { FiSearch } from "react-icons/fi";

const Users = () => {
  const [chats, setChats] = useState(Chats);

  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const filtered_users = Chats.filter((item) => {
      return Object.values(item.name)
        .join("")
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });

    setChats(filtered_users);
  }, [searchKey]);

  return (
    <div className="p-2 bg-white rounded-t-2xl  ">
      <div className="flex justify-between">
        <div>
          <span className="font-semibold">Messages</span>
          <span className="rounded-full bg-orange-500  text-white ml-2 p-1 px-2 text-sm">
            2
          </span>
        </div>
        <div>
          <FiSearch className="inline my-auto text-xl" />
          <input
            className="w-28 px-2 py-1 text-sm outline-none border-none"
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
      </div>
      <div className=" h-[25rem] overflow-y-scroll  scrollbar-hide">
        {chats.map((chat) => {
          return (
            <div
              key={chat.id}
              className="my-4 grid grid-cols-5 border-b-2 mx-2 rounded-sm py-2 "
            >
              <div className="py-2 px-1 mr-1 text-4xl rounded-full bg-yellow-200 mb-2 text-left">
                {chat.emoji}
              </div>
              <div className="col-span-3">
                <div className="text-lg font-semibold">{chat.name}</div>
                <div className="text-xs">{chat.message}</div>
              </div>
              <div className="text-xs py-1">
                <div className=" text-gray-400">3:32pm</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

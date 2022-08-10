import React from "react";
import { NewConnections } from "./data";

const Connections = () => {
  return (
    <div>
      <div className="p-4">
        <span className="font-semibold">New Connections</span>
        <span className="rounded-full bg-orange-500  text-white ml-2 p-1 px-2 text-sm">
          2
        </span>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {NewConnections.map((connection) => {
          return (
            <span
              key={connection.id}
              className="px-2 py-4 text-center w-20 mx-1 "
            >
              <span className="py-2 px-1 text-4xl rounded-full bg-white mb-2">
                {connection.emoji}
              </span>
              <div className="mt-2 text-xs text-gray-400 italic ">
                {connection.name}
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;

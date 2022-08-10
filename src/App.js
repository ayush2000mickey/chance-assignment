import React from "react";
import Connections from "./components/Connections";
import Users from "./components/Users";

function App() {
  return (
    <div className="font-mukta tracking-wide bg-slate-800 h-[100vh] py-6">
      <div className="w-[350px] mx-auto  border-4 border-gray-500 bg-sky-100">
        <Connections />
        <Users />
      </div>
    </div>
  );
}

export default App;

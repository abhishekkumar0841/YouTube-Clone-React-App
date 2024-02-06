import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="px-6 py-2 ">
      <Header />
      <div className="flex py-6 relative top-[8vh]  ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

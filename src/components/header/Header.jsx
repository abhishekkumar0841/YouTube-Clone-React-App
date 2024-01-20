import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BiSearch,
  BiMicrophone,
  BiVideoOff,
  BiVideoPlus,
  BiBell,
  BiUser,
} from "react-icons/bi";
import YouTubeLogo from "../../assets/YouTube-Logo.png";

const Header = () => {
  return (
    <div className=" w-full h-[8vh] border px-6 py-2 flex items-center justify-between">
      {/* hamburger menu and logo */}
      <div className="flex items-center gap-6">
        <RxHamburgerMenu className=" text-3xl font-bold cursor-pointer" />
        <img src={YouTubeLogo} alt="YouTube" className=" w-20" />
      </div>

      {/* Search input form and voice */}
      <div className="flex items-center gap-6">
        <form className="border-2 flex items-center w-[600px] rounded-3xl ">
          <input
            type="text"
            placeholder="Search"
            className="px-6 border-none w-[550px] py-1 bg-transparent text-xl outline-blue-400 rounded-l-3xl"
          />
          <button className="w-[50px] flex items-center justify-center">
            <BiSearch className=" text-2xl" />
          </button>
        </form>
        <div className=" bg-gray-200 rounded-full p-2">
          <BiMicrophone className=" text-2xl cursor-pointer" />
        </div>
      </div>

      {/* video upload button, notification button and user logo */}
      <div className="flex items-center gap-4">
        <BiVideoPlus className=" cursor-pointer text-3xl" />
        <BiBell className=" cursor-pointer text-3xl" />
        <BiUser className=" cursor-pointer text-3xl" />
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BiSearch,
  BiMicrophone,
  BiVideoPlus,
  BiBell,
  BiUser,
  BiMicrophoneOff,
} from "react-icons/bi";
import YouTubeLogo from "../../assets/YouTube-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../../redux/slices/sideBarSlice";
import axios from "axios";
import { YouTube_Search_API } from "../../utils/constants";
import SearchResultsBox from "../searchResultsBox/SearchResultsBox";
import {
  setResults,
  setSearchTerm,
} from "../../redux/slices/searchResultsSlice";
import useSpeechRecognition from "../../hooks/speechRecognition/useSpeechRecognition";
import SearchComponent from "../searchComponent/SearchComponent";

const Header = () => {
  const dispatch = useDispatch();
  
  const handleSideBar = () => {
    dispatch(setSideBar());
  };

  return (
    <div className=" w-full h-[8vh] border-b-2 flex items-center justify-between fixed top-0 left-0 px-6 py-8 z-50 bg-white">
      {/* hamburger menu and logo */}
      <div className="flex items-center gap-6">
        <RxHamburgerMenu
          className=" text-3xl font-bold cursor-pointer"
          onClick={handleSideBar}
        />
        <Link to={"/"}>
          <img src={YouTubeLogo} alt="YouTube" className=" w-20" />
        </Link>
      </div>

      {/* Search input form and voice */}
      <SearchComponent/>

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

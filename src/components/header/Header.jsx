import React, { useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BiSearch,
  BiMicrophone,
  BiVideoPlus,
  BiBell,
  BiUser,
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

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { searchTerm } = useSelector((state) => state.searchResults);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchYoutubeSearchResults();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const fetchYoutubeSearchResults = async () => {
    try {
      const response = await axios.get(YouTube_Search_API + searchTerm);
      dispatch(setResults(response?.data?.[1]));
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleInput(e) {
    dispatch(setSearchTerm(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm) return;
    navigate(`/search/${searchTerm}`);
    dispatch(setSearchTerm(""));
    inputRef.current.blur(); // Call blur method on the input element reference
  }

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
      <div className="flex items-center gap-6 relative">
        <form
          className="border-2 flex items-center w-[600px] rounded-3xl "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            className="px-6 border-none w-[550px] py-1 bg-transparent text-xl outline-blue-400 rounded-l-3xl"
            value={searchTerm}
            onChange={handleInput}
            ref={inputRef}
          />
          <button className="w-[50px] flex items-center justify-center">
            <BiSearch className=" text-2xl" />
          </button>
        </form>
        <div className=" bg-gray-200 rounded-full p-2">
          <BiMicrophone className=" text-2xl cursor-pointer" />
        </div>
        {searchTerm && <SearchResultsBox />}
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

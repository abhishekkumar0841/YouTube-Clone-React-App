import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSpeechRecognition from "../../hooks/speechRecognition/useSpeechRecognition";
import {
  setResults,
  setSearchTerm,
} from "../../redux/slices/searchResultsSlice";
import { YouTube_Search_API } from "../../utils/constants";
import { BiMicrophone, BiMicrophoneOff, BiSearch } from "react-icons/bi";
import SearchResultsBox from "../searchResultsBox/SearchResultsBox";
import axios from "axios";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { searchTerm } = useSelector((state) => state.searchResults);
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchYoutubeSearchResults();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  // use effect for speech recognition
  useEffect(() => {
    dispatch(setSearchTerm(text));
  }, [text]);

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

  const handleMicrophone = () => {
    if (isListening) {
      stopListening();
      inputRef.current.blur();
    } else {
      startListening();
      inputRef.current.focus();
    }
  };

  return (
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
      <div className=" bg-gray-200 rounded-full p-2" onClick={handleMicrophone}>
        {isListening ? (
          <BiMicrophoneOff className=" text-2xl cursor-pointer animate-bounce" />
        ) : (
          <BiMicrophone className=" text-2xl cursor-pointer" />
        )}
      </div>
      {searchTerm && <SearchResultsBox />}
    </div>
  );
};

export default SearchComponent;

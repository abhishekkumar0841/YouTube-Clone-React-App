import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../redux/slices/searchResultsSlice";

const SearchResultsBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { results } = useSelector((state) => state.searchResults);

  const handleClick = (term) => {
    navigate(`/search/${term}`);
    dispatch(setSearchTerm(""));
  };

  return (
    <div className="absolute top-12 bg-white text-black font-semibold text-xl p-6 rounded-2xl w-[550px] border-2">
      {results?.map((r) => (
        <div
          key={r}
          className="flex items-center gap-4  rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out px-4 py-2"
          onClick={() => handleClick(r)}
        >
          <BiSearch /> {r}
        </div>
      ))}
    </div>
  );
};

export default SearchResultsBox;

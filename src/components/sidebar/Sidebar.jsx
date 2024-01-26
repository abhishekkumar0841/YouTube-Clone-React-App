import React from "react";
import { categories } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/slices/videoSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sideBar = useSelector((state) => state.sideBar.showSideBar);
  const selectedCategory = useSelector(
    (state) => state.videos.selectedCategory
  );

  const handleCategory = (e) => {
    dispatch(setSelectedCategory(e.target.innerText));
    navigate("/");
  };
  return (
    <div
      className={
        sideBar
          ? "flex flex-col w-2/12 pb-12 h-[90vh] overflow-x-scroll gap-8 fixed"
          : " hidden"
      }
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={handleCategory}
          className={`flex items-center gap-8 text-2xl font-semibold hover:bg-gray-200 transition-all duration-200 ease-in-out rounded-lg py-1 px-4 max-w-52 ${
            selectedCategory === category.name ? "bg-gray-200" : ""
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

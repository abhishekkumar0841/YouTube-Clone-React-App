import React from "react";
import { useSelector } from "react-redux";

const VideoPageShimmer = () => {
    const sideBar = useSelector(state=> state.sideBar.showSideBar)
  return (
    <div>
      <div className={sideBar ? "w-[760px] h-[460px] bg-black" : "w-[980px] h-[460px] bg-black"}></div>
      <div className="flex flex-col gap-2 mt-5 max-w-[760px]">
        <h1 className=" bg-gray-200 h-6 w-96"></h1>
        <div className="flex items-center gap-2">
          <div className=" w-[50px] h-[50px] bg-gray-200 rounded-full"></div>
          <h1 className=" bg-gray-200 h-6 w-32"></h1>
          <div className="bg-gray-200 h-6 w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPageShimmer;

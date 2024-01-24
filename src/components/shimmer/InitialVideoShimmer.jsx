import React from "react";

const InitialVideoShimmer = () => {
  return (
    <div className="w-[350px] min-h-56 cursor-pointer p-2">
      <div className=" w-full overflow-hidden rounded-xl bg-gray-300">
        <div className=" w-full min-h-52"></div>
      </div>
      <div className=" mt-2 flex flex-col gap-3">
        <h1 className=" bg-gray-300 min-w-28 min-h-6"></h1>
        <p className=" bg-gray-300 min-w-28 min-h-6"></p>
        <p className=" bg-gray-300 min-w-28 min-h-6"></p>
      </div>
    </div>
  );
};

export default InitialVideoShimmer;

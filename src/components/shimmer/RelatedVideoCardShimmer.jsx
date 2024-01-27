import React from "react";

const RelatedVideoCardShimmer = () => {
  return (
    <div className=" rounded-lg flex mb-5 gap-4 w-96">
      <div className=" w-4/12 h-[80px] bg-gray-200 rounded-md">
      </div>
      <div className=" w-8/12 flex flex-col gap-1">
        <p className=" bg-gray-200 rounded-xl h-5 w-52 font-semibold capitalize"></p>
        <p className=" bg-gray-200 rounded-xl h-5 w-44 text-sm text-gray-500 font-semibold"></p>
        <p className=" bg-gray-200 rounded-xl h-5 w-32 text-sm text-gray-500 font-semibold"></p>
      </div>
    </div>
  );
};

export default RelatedVideoCardShimmer;

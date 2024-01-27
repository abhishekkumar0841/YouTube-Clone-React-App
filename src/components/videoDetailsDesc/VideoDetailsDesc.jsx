import React, { useState } from "react";
import { dateFormatter } from "../../utils/formatter";

const VideoDetailsDesc = ({ videoDesc, viewCount, publishedAt }) => {
  const publishDate = dateFormatter(publishedAt);
  const [collapse, setCollapse] = useState(true);
  const desc = collapse ? videoDesc?.substr(0, 100) : videoDesc

  return (
    <div className="bg-gray-100 rounded-lg p-5 mt-4">
      <div className=" text-lg font-bold ">
        <span>{viewCount} views,</span> <span>{publishDate}</span>
      </div>
      <span className=" text-lg">
        {desc} {" "}
        {collapse ? (
          <span className=" font-bold cursor-pointer" onClick={()=>setCollapse(false)}>
            ...more
          </span>
        )
        : (
            <span className=" font-bold cursor-pointer" onClick={()=>setCollapse(true)}>
                {" "} Show less
            </span>
        )
        }{" "}
      </span>
    </div>
  );
};

export default VideoDetailsDesc;

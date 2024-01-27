import React from "react";
import { dateFormatter } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";

const RelatedVideoCard = ({ videoDetails }) => {
  const navigate = useNavigate();
  const videoId = videoDetails?.id?.videoId;
  const { title, channelTitle, publishedAt, thumbnails } =
    videoDetails?.snippet;

  const modifyTitle = title?.length > 10 ? title?.substr(0, 30) + "..." : title;

  const pDate = dateFormatter(publishedAt);

  const handleClick = () => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div
      className=" rounded-lg flex mb-5 gap-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className=" w-4/12 overflow-hidden rounded-md">
        <img src={thumbnails?.default?.url} alt="" className=" scale-[1.32]" />
      </div>
      <div className=" w-8/12">
        <p className=" font-semibold capitalize">{modifyTitle}</p>
        <p className=" text-sm text-gray-500 font-semibold">
          {channelTitle} ✅
        </p>
        <p className=" text-sm text-gray-500 font-semibold">{pDate}</p>
      </div>
    </div>
  );
};

export default RelatedVideoCard;

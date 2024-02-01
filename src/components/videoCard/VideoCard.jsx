import React from "react";
import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";

const VideoCard = ({ videoDetails }) => {
  const navigate = useNavigate();
  const id = videoDetails?.id?.videoId;

  const videoTitle =
    videoDetails?.snippet?.title?.length > 60
      ? videoDetails?.snippet?.title?.substr(0, 60) + "..."
      : videoDetails?.snippet?.title;

  const channelId = videoDetails?.snippet?.channelId;
  const publishDate = videoDetails?.snippet?.publishTime;
  const day = dateFormatter(publishDate)

  function navigateToVideoPage() {
    navigate(`/video/${id}`);
  }

  function navigateToChannelPage() {
    navigate(`/channel/${channelId}`);
  }

  return (
    <div className=" w-[350px] min-h-56 p-2 cursor-pointer">
      <div
        className=" w-full overflow-hidden rounded-xl"
        onClick={navigateToVideoPage}
      >
        <img
          src={videoDetails?.snippet?.thumbnails?.high?.url}
          alt="Thumbnail"
          className=" w-full scale-[1.40] max-h-52"
        />
      </div>
      <div className=" mt-2">
        <h1 className=" font-semibold" onClick={navigateToVideoPage}>
          {videoTitle}
        </h1>
        <p
          className=" font-bold text-gray-500 hover:text-gray-400 transition-all duration-200 ease-in-out"
          onClick={navigateToChannelPage}
        >
          {videoDetails?.snippet?.channelTitle}
        </p>
        <p
          className=" font-semibold text-gray-500"
          onClick={navigateToVideoPage}
        >
          {day}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

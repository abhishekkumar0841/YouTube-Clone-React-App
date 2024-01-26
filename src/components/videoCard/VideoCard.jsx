import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ videoDetails }) => {
  const navigate = useNavigate();
  const id = videoDetails?.id?.videoId

  const videoTitle =
    videoDetails?.snippet?.title?.length > 60
      ? videoDetails?.snippet?.title?.substr(0, 60) + "..."
      : videoDetails?.snippet?.title;

  const publishDate = videoDetails?.snippet?.publishedAt;
  const date = new Date(publishDate);
  const timeDiff = Date.now() - date?.getTime();
  const postedDate = new Date(timeDiff);
  const day = postedDate?.getDate();

  return (
    <div
      className=" w-[350px] min-h-56 p-2 cursor-pointer"
      onClick={() => navigate(`/video/${id}`)}
    >
      <div className=" w-full overflow-hidden rounded-xl">
        <img
          src={videoDetails?.snippet?.thumbnails?.high?.url}
          alt="Thumbnail"
          className=" w-full scale-[1.40] max-h-52"
        />
      </div>
      <div className=" mt-2">
        <h1>{videoTitle}</h1>
        <p className=" font-semibold">{videoDetails?.snippet?.channelTitle}</p>
        <p>
          {day} <span>Days ago</span>
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

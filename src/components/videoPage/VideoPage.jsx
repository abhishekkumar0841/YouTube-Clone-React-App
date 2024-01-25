import React from "react";
import Layout from "../layout/Layout";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
  const { state } = useLocation();

  const videoId = state?.id?.videoId;
  const channelName = state?.snippet?.channelTitle;
  const videoTitle = state?.snippet?.title;
  const videoDesc = state?.snippet?.description;

  return (
    <Layout>
      <div className="pl-10 absolute left-64">
        <div>
          <iframe
            width="760"
            height="415"
            src={"https://www.youtube.com/embed/" + videoId}
          ></iframe>
        </div>
        <div className="flex flex-col gap-2 mt-5 max-w-[760px]">
          <h1 className=" font-bold text-xl">{videoTitle}</h1>
          <div className="flex items-center gap-2">
            <img
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${channelName}`}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className=" font-bold text-xl">{channelName}</h1>
          </div>
          <h1 className=" font-semibold text-xl">{videoDesc}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;

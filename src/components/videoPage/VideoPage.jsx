import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { fetchingAPI } from "../../utils/fetchingAPI";
import {
  setRelatedVideos,
  setVideoDetails,
} from "../../redux/slices/videoSlice";
import { likeFormatter } from "../../utils/formatter";
import LikeComponent from "../likeComponent/LikeComponent";
import VideoDetailsDesc from "../videoDetailsDesc/VideoDetailsDesc";

const VideoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.sideBar.showSideBar);
  const videoDetail = useSelector((state) => state.videos.videoDetails);
  const videos = useSelector((state) => state.videos.relatedVideos);

  const channelName = videoDetail?.snippet?.channelTitle;
  const videoTitle = videoDetail?.snippet?.title;
  const videoDesc = videoDetail?.snippet?.description;
  const channelId = videoDetail?.snippet?.channelId;
  const publishedAt = videoDetail?.snippet?.publishedAt;

  const likesCount = videoDetail?.statistics?.likeCount;
  const viewCount = videoDetail?.statistics?.viewCount;
  const commentCount = videoDetail?.statistics?.commentCount;

  //formatting likesCount
  const totalLikes = likeFormatter(likesCount);

  useEffect(() => {
    fetchingAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      dispatch(setVideoDetails(data?.items[0]));
    });

    fetchingAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        dispatch(setRelatedVideos(data?.items));
      }
    );
  }, [id]);

  return (
    <Layout>
      <div
        className={sideBar ? "pl-10 absolute left-64 pb-10" : "pl-0 absolute left-0 pb-10"}
      >
        <div>
          <ReactPlayer
            url={"https://www.youtube.com/embed/" + id}
            controls
            width={720}
            height={460}
          />
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
            <LikeComponent totalLikes={totalLikes} />
          </div>
          <VideoDetailsDesc
            viewCount={viewCount}
            publishedAt={publishedAt}
            videoDesc={videoDesc}
          />
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;

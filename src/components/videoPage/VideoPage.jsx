import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { fetchingAPI } from "../../utils/fetchingAPI";
import { setVideoDetails } from "../../redux/slices/videoSlice";
import { likeFormatter } from "../../utils/formatter";
import LikeComponent from "../likeComponent/LikeComponent";
import VideoDetailsDesc from "../videoDetailsDesc/VideoDetailsDesc";
import RelatedVideosList from "../relatedVideosList/RelatedVideosList";
import { setLoading } from "../../redux/slices/loadingSlice";
import VideoPageShimmer from "../shimmer/VideoPageShimmer";

const VideoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.sideBar.showSideBar);
  const videoDetail = useSelector((state) => state.videos.videoDetails);
  const loading = useSelector((state) => state.loading.isLoading);

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
    (async function () {
      dispatch(setLoading(true));
      try {
        const data = await fetchingAPI(
          `videos?part=snippet,statistics&id=${id}`
        );
        dispatch(setVideoDetails(data?.items[0]));
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, [id]);

  return (
    <Layout>
      <div
        className={`absolute pb-10 flex gap-14 h-[100vh]  ${
          sideBar ? "pl-10 left-64" : "pl-0 left-0"
        }`}
      >
        {loading ? (
          <VideoPageShimmer />
        ) : (
          <div>
            <ReactPlayer
              url={"https://www.youtube.com/embed/" + id}
              controls
              width={sideBar ? 720 : 980}
              height={460}
            />
            <div className="flex flex-col gap-2 mt-5 max-w-[760px]">
              <h1 className=" font-bold text-xl">{videoTitle}</h1>
              <div className="flex items-center gap-20 relative">
                <Link
                  to={`/channel/${channelId}`}
                  className="flex items-center gap-2"
                >
                  <img
                    src={`https://api.dicebear.com/5.x/initials/svg?seed=${channelName}`}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h1 className=" font-bold text-xl">{channelName}</h1>
                </Link>
                <LikeComponent totalLikes={totalLikes} />
              </div>
              <VideoDetailsDesc
                viewCount={viewCount}
                publishedAt={publishedAt}
                videoDesc={videoDesc}
              />
            </div>
          </div>
        )}
        <RelatedVideosList id={id} />
      </div>
    </Layout>
  );
};

export default VideoPage;

import React, { useEffect } from "react";
import { fetchingAPI } from "../../utils/fetchingAPI";
import VideoCard, { isLive } from "../videoCard/VideoCard";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setInitialVideos } from "../../redux/slices/videoSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import InitialVideoShimmer from "../shimmer/InitialVideoShimmer";

const Body = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.initialVideos);
  const loading = useSelector((state) => state.loading.isLoading);
  const selectedCategory = useSelector(
    (state) => state.videos.selectedCategory
  );
  const sideBar = useSelector((state) => state.sideBar.showSideBar);

  //higher order component
  const LiveCard = isLive(VideoCard);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const data = await fetchingAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        dispatch(setInitialVideos(data?.items));
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchData();
  }, [selectedCategory]);

  return (
    <Layout>
      <div
        className={`flex flex-wrap justify-between absolute   ${
          sideBar ? "gap-10 w-10/12 pl-10 left-64" : "gap-5 w-full pl-0 left-0"
        }`}
      >
        {loading ? (
          <>
            {Array(6)
              .fill("")
              .map((el, index) => (
                <InitialVideoShimmer key={index} />
              ))}
          </>
        ) : (
          videos?.map((video, idx) =>
            video?.snippet?.liveBroadcastContent === "live" ? (
              <LiveCard
                key={video?.id?.videoId ? video?.id?.videoId : idx}
                videoDetails={video}
              />
            ) : (
              <VideoCard
                key={video?.id?.videoId ? video?.id?.videoId : idx}
                videoDetails={video}
              />
            )
          )
        )}
      </div>
    </Layout>
  );
};

export default Body;

import React, { useEffect, useState } from "react";
import { fetchingAPI } from "../../utils/fetchingAPI";
import VideoCard from "../videoCard/VideoCard";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setInitialVideos } from "../../redux/slices/videoSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import InitialVideoShimmer from "../shimmer/InitialVideoShimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.initialVideos);
  const loading = useSelector((state) => state.loading.isLoading);
  const selectedCategory = useSelector(
    (state) => state.videos.selectedCategory
  );

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
      <div className="flex flex-wrap gap-10 w-10/12 justify-between pl-10  absolute left-64">
        {loading ? (
          <>
            {Array(6)
              .fill("")
              .map((el, index) => (
                <InitialVideoShimmer key={index} />
              ))}
          </>
        ) : (
          videos?.map((video, idx) => {
            return (
              <VideoCard
                key={video?.id?.videoId ? video?.id?.videoId : idx}
                videoDetails={video}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Body;

import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { fetchingAPI } from "../../utils/fetchingAPI";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVideos } from "../../redux/slices/videoSlice";
import InitialVideoShimmer from "../shimmer/InitialVideoShimmer";
import VideoCard from "../videoCard/VideoCard";
import { setLoading } from "../../redux/slices/loadingSlice";

const SearchResultsPage = () => {
  const loading = useSelector((state) => state.loading.isLoading);
  const searchVideos = useSelector((state) => state.videos.searchVideos);
  const sideBar = useSelector((state) => state.sideBar.showSideBar);
  const { searchTerm } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchVideos = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchingAPI(`search?part=snippet&q=${searchTerm}`);
        dispatch(setSearchVideos(data?.items));
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchSearchVideos();
  }, [searchTerm]);

  return (
    <Layout>
      <div
        className={
          sideBar
            ? "flex flex-wrap gap-10 w-10/12 justify-between pl-10  absolute left-64"
            : "flex flex-wrap gap-5 w-full justify-between pl-0  absolute left-0"
        }
      >
        {loading
          ? Array(6)
              .fill("")
              .map((el, idx) => <InitialVideoShimmer key={idx} />)
          : searchVideos.map((videos, idx) => (
              <VideoCard
                key={videos?.id?.videoId ? videos?.id?.videoId : idx}
                videoDetails={videos}
              />
            ))}
      </div>
    </Layout>
  );
};

export default SearchResultsPage;

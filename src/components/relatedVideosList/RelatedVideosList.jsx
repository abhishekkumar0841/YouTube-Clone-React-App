import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAPI } from "../../utils/fetchingAPI";
import { setRelatedVideos } from "../../redux/slices/videoSlice";
import { setLoading } from "../../redux/slices/loadingSlice";
import RelatedVideoCard from "./RelatedVideoCard";
import RelatedVideoCardShimmer from "../shimmer/RelatedVideoCardShimmer";

const RelatedVideosList = ({ id }) => {
  const videos = useSelector((state) => state.videos.relatedVideos);
  const loading = useSelector((state) => state.loading.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchingAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        dispatch(setRelatedVideos(data?.items));
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchRelatedVideos();
  }, [id]);

  return (
    <div className="h-[110vh] overflow-x-scroll">
      {loading
        ? Array(6)
            .fill("")
            .map((el, idx) => <RelatedVideoCardShimmer key={idx} />)
        : videos?.map((video) => (
            <RelatedVideoCard key={video?.id?.videoId} videoDetails={video} />
          ))}
    </div>
  );
};

export default RelatedVideosList;

import React, { useEffect, useState } from "react";
import { fetchingAPI } from "../../utils/fetchingAPI";
import VideoCard from "../videoCard/VideoCard";

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchingAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data?.items)
    );
  }, []);

  return (
    <div className="flex flex-wrap gap-10">
      {videos?.map((video) => (
        <VideoCard key={video?.id?.videoId} videoDetails={video} />
      ))}
    </div>
  );
};

export default Body;

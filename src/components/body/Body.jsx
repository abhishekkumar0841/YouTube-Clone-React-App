import React, { useEffect, useState } from "react";
import { fetchingAPI } from "../../utils/fetchingAPI";
import VideoCard from "../videoCard/VideoCard";
import Layout from "../layout/Layout";

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchingAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data?.items)
    );
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap gap-10 w-10/12 justify-between pl-10  absolute left-64">
        {videos?.map((video) => (
          <VideoCard key={video?.id?.videoId} videoDetails={video} />
        ))}
      </div>
    </Layout>
  );
};

export default Body;

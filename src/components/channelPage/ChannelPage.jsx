import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchingAPI } from "../../utils/fetchingAPI";
import {
  setChannelDetails,
  setChannelVideoLists,
} from "../../redux/slices/channelSlice";
import VideoCard from "../videoCard/VideoCard";
import ChannelTemplate from "./channelTemplate/ChannelTemplate";
import ChannelTemplateModal from "./channelTemplateModal/ChannelTemplateModal";

const ChannelPage = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.sideBar.showSideBar);
  const channelDetails = useSelector((state) => state?.channel?.channelDetails);

  const channelVideos = useSelector(
    (state) => state?.channel?.channelVideoLists
  );
  const channelBanner =
    channelDetails?.brandingSettings?.image?.bannerExternalUrl;

  useEffect(() => {
    const fetchChannelDetails = async () => {
      const data = await fetchingAPI(`channels?part=snippet&id=${channelId}`);
      dispatch(setChannelDetails(data?.items[0]));

      const videosData = await fetchingAPI(
        `search?channelId=${channelId}&part=snippet%2Cid&order=date`
      );
      dispatch(setChannelVideoLists(videosData?.items));
    };

    fetchChannelDetails();
  }, []);

  return (
    <Layout>
      <div
        className={`absolute pb-10 flex flex-col gap-14 h-[100vh]  ${
          sideBar ? "pl-10 left-64 w-[78vw]" : "pl-0 left-0 w-full"
        }`}
      >
        <div className="h-72">
          <img
            className=" w-full h-full rounded-xl"
            src={channelBanner}
            alt="Channel Banner"
          />
        </div>
        <div>
          <ChannelTemplate channelDetails={channelDetails} />
        </div>
        <div className={`flex flex-wrap  ${sideBar ? " gap-10" : "gap-5"}`}>
          {channelVideos?.map((video) => (
            <VideoCard key={video?.id?.videoId} videoDetails={video} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ChannelPage;

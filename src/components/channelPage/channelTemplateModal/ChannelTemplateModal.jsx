import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../../redux/slices/modalSlice";
import { dateFormatter, likeFormatter } from "../../../utils/formatter";
import { BiGlobe, BiSolidVideos } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";

const ChannelTemplateModal = () => {
  const { channelDetails } = useSelector((state) => state.channel);
  const dispatch = useDispatch();

  const customUrl = channelDetails?.snippet?.customUrl;
  const subscriberCount = channelDetails?.statistics?.subscriberCount;
  const publishedAt = channelDetails?.snippet?.publishedAt;
  const description = channelDetails?.snippet?.description;
  const videoCount = channelDetails?.statistics?.videoCount;
  const viewCount = channelDetails?.statistics?.viewCount;

  const totalSubs = likeFormatter(subscriberCount);
  const joinDate = dateFormatter(publishedAt);

  const closeModal = () => {
    dispatch(setOpenModal());
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center bg-black bg-opacity-60 fixed top-0 z-50">
      <div className=" absolute top-24 rounded-lg border-gray-100 p-8 bg-gray-700 text-white w-4/12 max-h-[30rem] overflow-y-scroll">
        <div className="flex items-center justify-between text-2xl mb-5">
          <p className=" font-semibold text-gray-400">About</p>
          <button
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-gray-600 transition-all duration-200 ease-in-out"
          >
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Channel Details</h1>
          <p className="flex items-center gap-2 font-semibold text-xl">
            <BiGlobe />
            www.youtube.com/{customUrl}
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            <IoIosPeople />
            {totalSubs} subscribers
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            <BiSolidVideos />
            {videoCount} videos
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            <BsGraphUpArrow />
            {viewCount} views
          </p>
          <p className="flex items-center gap-2 font-semibold text-xl">
            <FaEarthAmericas /> {joinDate}
          </p>
          {description && (
            <p className="flex items-center gap-2 font-semibold text-xl">
              Description: {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelTemplateModal;

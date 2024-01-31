import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { likeFormatter } from "../../../utils/formatter";
import { setOpenModal } from "../../../redux/slices/modalSlice";

const ChannelTemplate = () => {
  const channelDetails = useSelector((state) => state?.channel?.channelDetails);
  const title = channelDetails?.snippet?.title;
  const customUrl = channelDetails?.snippet?.customUrl;
  const url = channelDetails?.snippet?.thumbnails?.high?.url;
  const subscriberCount = channelDetails?.statistics?.subscriberCount;
  const videoCount = channelDetails?.statistics?.videoCount;

  const dispatch = useDispatch()
  const totalSubs = likeFormatter(subscriberCount)

  const handleModal = ()=>{
    dispatch(setOpenModal())
  }

  return (
    <div className="flex items-center gap-10">
      <div className=" h-40 w-40 p-1 border rounded-full border-red-500">
        <img src={url} alt="" className=" w-full h-full rounded-full" />
      </div>
      <div className=" space-y-1">
        <h1 className=" text-4xl font-bold">{title}</h1>
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-lg">
            {customUrl} <LuDot />
          </p>
          <p className="flex items-center gap-2 text-lg">
            {totalSubs} subscribers <LuDot />
          </p>
          <p className="flex items-center gap-2 text-lg">{videoCount} videos</p>
        </div>
        <div className="flex items-center gap-4 text-lg cursor-pointer" onClick={handleModal}>
          <p>More about this channel</p> <IoIosArrowForward />
        </div>
        <button className=" bg-black py-2 px-5 rounded-full text-white font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ChannelTemplate;

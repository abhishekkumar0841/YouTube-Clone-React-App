import React, { useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

const LikeComponent = ({ totalLikes }) => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const handleLike = () => {
    setDisLike(false);
    setLike(!like);
  };

  const handleDislike = () => {
    setLike(false);
    setDisLike(!disLike);
  };

  return (
    <button className=" ml-5 flex items-center gap-3 py-2 px-4 bg-gray-100 rounded-full absolute right-0">
      <span className="flex items-center gap-2" onClick={handleLike}>
        {like ? (
          <BiSolidLike className=" text-2xl" />
        ) : (
          <BiLike className=" text-2xl" />
        )}{" "}
        <p className=" font-bold">{totalLikes}</p>
      </span>
      <span className=" h-5 w-[1px] bg-black"></span>
      <span onClick={handleDislike}>
        {disLike ? (
          <BiSolidDislike className=" text-2xl" />
        ) : (
          <BiDislike className=" text-2xl" />
        )}
      </span>
    </button>
  );
};

export default LikeComponent;

import {
  BiHome,
  BiMusic,
  BiMovie,
  BiBroadcast,
  BiLogoReact,
  BiSolidSchool,
  BiPodcast,
} from "react-icons/bi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaTheaterMasks } from "react-icons/fa";
import { FaFaceKissWinkHeart } from "react-icons/fa6";
import { MdCheckroom } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { IoFitness } from "react-icons/io5";

export const categories = [
  { name: "New", icon: <BiHome /> },
  { name: "Music", icon: <BiMusic /> },
  { name: "Movie", icon: <BiMovie /> },
  { name: "Sport", icon: <IoFitness /> },
  { name: "Gaming", icon: <SiYoutubegaming /> },
  { name: "Live", icon: <BiBroadcast /> },
  { name: "Coding", icon: <IoCodeSlash /> },
  { name: "ReactJS", icon: <BiLogoReact /> },
  { name: "NextJS", icon: <TbBrandNextjs /> },
  { name: "Education", icon: <BiSolidSchool /> },
  { name: "Podcast", icon: <BiPodcast /> },
  { name: "Fashion", icon: <MdCheckroom /> },
  { name: "Beauty", icon: <FaFaceKissWinkHeart /> },
  { name: "Comedy", icon: <FaTheaterMasks /> },
  { name: "Gym", icon: <CgGym /> },
  { name: "Crypto", icon: <MdOutlineDeveloperMode /> },
];

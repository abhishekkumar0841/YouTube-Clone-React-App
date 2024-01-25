import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./components/videoPage/VideoPage";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>
  );
};

export default App;

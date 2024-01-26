import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./components/videoPage/VideoPage";
import SearchResultsPage from "./components/searchResultsPage/SearchResultsPage";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/search/:searchTerm" element={<SearchResultsPage />} />
      </Routes>
    </div>
  );
};

export default App;

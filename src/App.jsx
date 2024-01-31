import React from "react";
// import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./components/videoPage/VideoPage";
import SearchResultsPage from "./components/searchResultsPage/SearchResultsPage";
import ChannelPage from "./components/channelPage/ChannelPage";
import ChannelTemplateModal from "./components/channelPage/channelTemplateModal/ChannelTemplateModal";
import { useSelector } from "react-redux";

const App = () => {
  const openModal = useSelector((state) => state.modal.openModal);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/search/:searchTerm" element={<SearchResultsPage />} />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
      </Routes>

      {openModal && <ChannelTemplateModal />}
    </div>
  );
};

export default App;

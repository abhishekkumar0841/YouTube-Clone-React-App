import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return <div className="">
    <Routes>
      <Route path="/" element={<Body/>} />
    </Routes>
  </div>;
};

export default App;

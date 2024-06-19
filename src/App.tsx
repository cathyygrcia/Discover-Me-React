import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import { ArtistInfo } from "./ArtistInfo";

function App() {
  return (
    <div className="bg-gray-600 min-h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/artist/:id" element={<ArtistInfo />} />
      </Routes>
    </div>
  );
}

export default App;

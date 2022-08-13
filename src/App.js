import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ImageAnnotator from "./components/image/ImageAnnotator";
import VideoCards from "./components/video/VideoCards";
import VideoAnnotator from "./components/video/VideoAnnotator";
import AudioCards from "./components/audio/AudioCards";
import AudioAnnotator from "./components/audio/AudioAnnotator";
import TextAnnotator from "./components/text/TextAnnotator";
import Home from "./components/home";
import ImageCards from "./components/image/ImageCards";

const app = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-image" element={<ImageCards />} />
        <Route path="/data-video" element={<VideoCards />} />
        <Route path="/data-audio" element={<AudioCards />} />
        <Route path="/data-text" element={<TextAnnotator />} />

        <Route path="/image-annotate/:id" element={<ImageAnnotator />} />
        <Route path="/video-annotate/:id" element={<VideoAnnotator />} />
        <Route path="/audio-annotate/:id" element={<AudioAnnotator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default app;

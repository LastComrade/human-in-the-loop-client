import React from "react";

// Components
import Header from "./Header";
import ImageCard from "../image";
import VideoCard from "../video/";
import AudioCard from "../audio";
import TextCard from "../text/TextCard";

const Home = () => {
  return (
    <div className="bg-black min-h-screen pt-10 overflow-hidden relative z-10">
      <Header />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <ImageCard />

          <VideoCard />

          <AudioCard />

          <TextCard />
        </div>
      </section>
    </div>
  );
};

export default Home;

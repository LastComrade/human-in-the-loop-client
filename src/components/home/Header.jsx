import React from "react";

const Header = () => {
  return (
    <div className="container xl:max-w-6xl mx-auto px-4">
      <header className="text-center mx-auto mb-6 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
          Annotations | Human-In-The-Loop
        </h2>
        <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
          React & Django Pipeline
        </p>
      </header>
    </div>
  );
};

export default Header;

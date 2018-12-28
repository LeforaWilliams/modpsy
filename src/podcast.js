import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

const Podcast = props => {
  //libsyn player height 100!
  return (
    <div className="podcast-wrap">
      <h1> Coming Soon </h1>
      <object
        data="//html5-player.libsyn.com/embed/episode/id/6806080/height/90/theme/custom/thumbnail/yes/preload/no/direction/backward/render-playlist/no/custom-color/87A93A/"
        width="400"
        height="100"
        type="text/html"
      >
        Alternative Content
      </object>
    </div>
  );
};

export default Podcast;

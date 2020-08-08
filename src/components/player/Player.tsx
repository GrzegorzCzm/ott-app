import React from "react";
import ReactPlayer from "react-player";

const Player = () => (
  <div>
    <ReactPlayer
      playing
      controls
      light
      url="https://cd-stream-od.telenorcdn.net/tnfbaod/SF/585db4b3e4b09db0cf348a64/dash_a1.ism/playlist.mpd"
    />
  </div>
);

export default Player;

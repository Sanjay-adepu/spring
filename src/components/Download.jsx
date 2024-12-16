import React from "react";

function Download({ videoUrl }) {
  return (
    <div>
      <a href={videoUrl} download="cartoonized_video.mp4">
        Download Processed Video
      </a>
    </div>
  );
}

export default Download;
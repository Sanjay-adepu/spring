import React, { useState } from "react";
import Upload from "./components/Upload";
import Preview from "./components/Preview";
import Download from "./components/Download";

function App() {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div>
      <h1>Video Cartoonizer</h1>
      <Upload setVideoUrl={setVideoUrl} />
      {videoUrl && <Preview videoUrl={videoUrl} />}
      {videoUrl && <Download videoUrl={videoUrl} />}
    </div>
  );
}

export default App;
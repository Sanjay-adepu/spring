import React from "react";
import axios from "axios";

function Upload({ setVideoUrl }) {
  const handleUpload = async (event) => {
    const formData = new FormData();
    formData.append("video", event.target.files[0]);

    try {
      const { data } = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setVideoUrl(data.url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleUpload} />
    </div>
  );
}

export default Upload;
import React, { useEffect } from "react";
import * as PIXI from "pixi.js";

function Preview({ videoUrl }) {
  useEffect(() => {
    const app = new PIXI.Application({
      width: 800,
      height: 450,
      transparent: true,
    });
    document.getElementById("preview").appendChild(app.view);

    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.loop = true;

    const texture = PIXI.Texture.from(video);
    const sprite = new PIXI.Sprite(texture);
    sprite.width = app.screen.width;
    sprite.height = app.screen.height;
    app.stage.addChild(sprite);

    // Apply cartoon filter (black outline, etc.) using PixiJS filters
    const outlineFilter = new PIXI.filters.OutlineFilter(10, 0x000000); // Black outline
    sprite.filters = [outlineFilter];

    video.play();

    return () => app.destroy(true); // Cleanup when component is unmounted
  }, [videoUrl]);

  return <div id="preview"></div>;
}

export default Preview;
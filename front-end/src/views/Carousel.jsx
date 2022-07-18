import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const ComponentA = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get("/api/gallery");
      setImages(res.data);
    };

    getImages();
  }, []);
  const imageMap = images.map((url) => {
    return url.name;
  });
  console.log(imageMap);
  return (
    <div className="min-h-screen">
      <Carousel breakPoints={breakPoints} showArrows={true} showThumbs={true}>
        {images.map((url, index) => {
          return (
            <div key={index}>
              <img alt="" src={url.name} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

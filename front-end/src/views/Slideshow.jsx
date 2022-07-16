import React, { useEffect, useState, useRef } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export const Slideshow = (Slideshow) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const onNextClick = () => {
    if (index !== colors.length - 1) {
      setIndex((idx) => idx + 1);
    }
  };

  const onPreviousClick = () => {
    if (index !== 0) {
      setIndex((idx) => idx - 1);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }} />
        ))}
      </div>
      <button className="left" onClick={onPreviousClick}>
        &lsaquo;
      </button>
      <button className="right" onClick={onNextClick}>
        &rsaquo;
      </button>

      <style jsx>
        {`
          .slideshow {
            margin: 0 auto;
            overflow: hidden;
            max-width: 500px;
          }

          .slideshow-slider {
            white-space: nowrap;
            transition: ease 1000ms;
          }

          .slide {
            display: inline-block;

            height: 400px;
            width: 100%;
            border-radius: 40px;
          }

          /* Buttons */

          .slideshowDots {
            text-align: center;
          }

          .slideshowDot {
            display: inline-block;
            height: 20px;
            width: 20px;
            border-radius: 50%;

            cursor: pointer;
            margin: 15px 7px 0px;

            background-color: #c4c4c4;
          }

          .slideshowDot.active {
            background-color: #6a0dad;
          }
          .left {
            left: 0;
            top: 0;
          }

          .right {
            right: 0;
            top: 0;
          }
        `}
      </style>
    </div>
  );
};

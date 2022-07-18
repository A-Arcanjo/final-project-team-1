import React from "react";

export const SmallButton = ({ value, onSmallButtonClick }) => {
  return (
    <>
      <button className="little-btn" onClick={onSmallButtonClick}>
        {value}
      </button>
      <style jsx>{`
        .little-btn {
          background: #FAE6B1;
          color: #31525B;
          border: none;
          font-size: 0.9rem;
          font-weight: bold;
          padding: 5px;
          margin-top: 40px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};
import React from "react";

export const SmallButton = ({ value, onSmallButtonClick }) => {
  return (
    <>
      <button className="little-btn" onClick={onSmallButtonClick}>
        {value}
      </button>
      <style jsx>{`
        .little-btn {
          background: #fae6b1;
          color: #31525b;
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

import React from "react";

export const Button = ({ value, onButtonClick }) => {
  return (
    <>
      <button className="btn" onClick={onButtonClick}>
        {value}
      </button>
      <style jsx>{`
        .btn {
          background: #FFA101;
          color: #31525B;
          border: none;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 10px;
          margin-top: 30px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};
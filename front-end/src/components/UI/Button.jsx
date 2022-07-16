import React from "react";

export const Button = ({ value, onButtonClick }) => {
  return (
    <>
      <button className="btn" onClick={onButtonClick}>
        {value}
      </button>
      <style jsx>{`
        .btn {
          background: #ffa101;
          color: #31525b;
          border: none;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 10px;
          margin-top: 60px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

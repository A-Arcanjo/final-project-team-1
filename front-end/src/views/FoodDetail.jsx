import React from "react";
import { Link } from "react-router-dom";
import { FoodDetailCard } from "../components/FoodDetailCard";

export const FoodDetail = () => {
  return (
    <div className="meetup-wrapper">
      <FoodDetailCard />
      <p className="back">
        <Link to="/foods"> ← back to list</Link>
      </p>
      <style jsx>{`
        .meetup-wrapper {
          width: 100%;
          height: calc(100vh - 100px);
        }
        .back {
          text-align: center;
          font-size: 18px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

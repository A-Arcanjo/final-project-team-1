import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import imagePlaceholder from "./images/placeholder.png";
import { formatDate } from "../utils/formatDate";

export const FoodDetailCard = () => {
  const { id } = useParams(); //viene dal path del frontend

  const [food, setFood] = useState({
    title: null,
    description: null,
    createdAt: null,
    joiners: null,
    creator: null,
  });

  useEffect(() => {
    fetch(`http://localhost:4000/foods/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
      .catch((err) => console.log(err));
  }, [id]);

  const formattedDate = formatDate(food.createdAt);
  return (
    <div className="food-card">
      <h3 className="food-name">{food.title}</h3>
      <p className="food-date">{formattedDate}</p>
      <img
        className="food-image"
        src={food.image || imagePlaceholder}
        alt="food"
      />
      <p className="food-description">{food.description}</p>
      <p className="food-creator">created by: {food.creator}</p>
      <p className="food-joiners">Joiners: {food.joiners || 0}</p>
      <style jsx>{`
        .food-card {
        margin:10px auto;
          background: #fff;
          padding: 30px 10px;
          width: 100%;
          max-width: 600px;
          box-shadow: 1px 1px 10px #cecece;
          border-radius:10px;
        }
          .meetup-image{
              width:100%

          }
        .food-title,
        .food-image,
        .food-date,
        .food-description,
        .food-creator,
        .food-joiners{
              margin-bottom:20px;
          }
          food-description{
              text-align:justify;
          }
        }
      `}</style>
    </div>
  );
};

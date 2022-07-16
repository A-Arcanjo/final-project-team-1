import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FoodCard } from "../components/FoodCard";

export const Foods = ({ setOpenModal }) => {
  const [foods, setFoods] = useState([]); //per importare il mock

  useEffect(() => {
    fetch("http://localhost:4000/foods")
      .then((res) => res.json())
      .then((res) => setFoods(res));
  }, []);

  if (!foods.length) {
    return (
      <>
        <p>
          Foods list empty. Add one{" "}
          <Link to="/foods/slideshow">
            <h3>here</h3>
          </Link>
        </p>
      </>
    );
  }

  return (
    <div>
      {foods.map((food) => (
        <FoodCard {...food} setOpenModal={setOpenModal} />
      ))}
    </div>
  );
};

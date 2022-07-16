import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { formatDate } from "../utils/formatDate.js";
import { Button } from "./UI/Button";

export const FoodCard = ({
  _id,
  title,
  image,
  joiners,
  createdAt,
  setOpenModal,
}) => {
  const formattedDate = formatDate(createdAt);
  const { currentUser } = useContext(AuthContext);

  const joinFood = () => {
    if (!currentUser.token) {
      setOpenModal(true);
    }
  };

  return (
    <div className="food-card">
      <div className="card-content">
        <Link to={`/foods/${_id}`}>
          <div className="card-content-left">
            <p>{formattedDate}</p>
            <h3 className="food-name">{title}</h3>
            <p>Joiners: {joiners || 0}</p>
          </div>
        </Link>
        <div className="card-content-right">
          <Button value="Join" onButtonClick={joinFood} />
          {/* <button className="card-button" onClick={joinMeetup}>
            Join
          </button> */}
        </div>
      </div>
      <style jsx>
        {`
          .food-card {
            display: flex;
            background: #fff;
            max-width: 570px;
            width: 100%;
            height: 140px;
            margin: 15px auto;
            padding: 10px;
            border-radius: 7px;
            box-shadow: 1px 1px 10px #cecece;
          }
          .card-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .card-content-left {
            padding: 0 20px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            font-size: 14px;
            height: 100px;
            margin: 5px 0;
          }
          .card-content-right {
            padding: 0 20px;
            margin: 5px 0;
          }
          .card-button {
            cursor: pointer;
            padding: 5px 15px;
            border-radius: 30px;
            background: #2ecc71;
            color: #fff;
            border: none;
          }
        `}
      </style>
    </div>
  );
};

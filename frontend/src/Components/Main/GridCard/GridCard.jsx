import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import "./GridCard.css";

function GridCard({
  name,
  address,
  type,
  rating,
  priceLevel,
  description,
  images,
  locationID,
}) {
  return (
    <>
      <div className="gridCardContainerDiv">
        <div className="leftChildGridCard">
          <div className="headerTextDiv">
            <p className="boldLocationName">
              <strong>
                <strong>{name}</strong>
              </strong>
            </p>
            <p className="leftHeaderText">{address}</p>
          </div>
          <div className="leftSideTextDiv">
            <br />
            <p className="greyText">{type}</p>
            <p className="greyText">{description}</p>

            <br />
            <p className="greyText">
              Rating: <StarRating rating={rating} />
            </p>
            <p className="greyText">Price Level: {priceLevel}</p>
          </div>
          <div className="componentButtonDiv">
            <button
              onClick={() => window.open(images, "_blank")}
              className="componentButtons"
            >
              Pictures{" "}
            </button>
            <button className="componentButtons">Website </button>
          </div>
        </div>
        <div className="rightChildGridCard">
          <button
            className="addToTripButton"
            onClick={() => console.log(locationID)}
          >
            Add to Trip
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
export default GridCard;

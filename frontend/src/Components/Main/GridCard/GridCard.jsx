import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./GridCard.css";

function GridCard() {
  return (
    <>
      <div className="rootContainer">
        <div className="gridContainerNew">
          <div className="headerTextDiv">
            <p className="bold">
              <strong>
                <strong>Muesums of History</strong>
              </strong>
            </p>
            <p className="leftHeaderText">
              10 Macquarie St, Sydney NSW 2000, Auatralia{" "}
            </p>
          </div>
          <div className="leftSideTextDiv">
            <br />
            <p className="greyText">History museum in Sydney, Australia</p>
            <br />
            <p className="greyText">Reviews: 4/5 Stars</p>
            <p className="greyText">PriceLevel: $</p>
          </div>
          <div className="componentButtonDiv">
            <button className="componentButtons">Pictures </button>
            <button className="componentButtons">Website </button>
          </div>
        </div>
        <div className="leftSideTextDiv"></div>
      </div>
    </>
  );
}
export default GridCard;

import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import SegmentRowRight from "./SegmentRowRight";
import SegmentRowLeft from "./SegmentRowLeft";
import AddToTripButton from "./AddToTripButton";
import "./FlightCard.css";
import Flights from "../Flights";

import { useDispatch } from "react-redux";

function SegmentWrapper(flightID) {
  const [isClicked, setIsClicked] = useState(false); 
  const [flightPrice, setFlightPrice] = useState();
  const [originCode, setOriginCode] = useState("");
  const [destCode, setDestCode] = useState("");

  function handleAddToTrip() {

    setIsClicked(!isClicked); 

    async function addObjectToVacation() { 
      const url = "http://127.0.0.1:8080";

      var tmp;
      // const hotelsEndpoin
      const flightEndpoints =
        "/api/vacations/addFlight?flightID=" +
        flightID +
        "&vacationID=" +
        sessionStorage.getItem("vacationID");

      const apiCall = url + flightEndpoints;
      try {
        const response = await axios.post(apiCall);
        const data = response.json();


        tmp = data;
      } catch (error) {}

      sessionStorage.removeItem("choosenFlightIDForVacation");
      sessionStorage.setItem("choosenFlightIDForVacation", flightID);
    }

    addObjectToVacation();
  }

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://127.0.0.1:8080/api/flights/getDestCodeByFlightID?flightID=" +
        flightID;
      const originUrl =
        "http://127.0.0.1:8080/api/flights/getOriginCodeByFlightID?flightID=" +
        flightID;
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=` +
            flightID,
          {
            mode: "cors",
          }
        );
        const data = await response.json();
        setFlightPrice(data);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(url);
        const data = response.data;
        setDestCode(data);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(originUrl);
        const data = response.data;
        setOriginCode(data);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
  });

  return (
    <>
      <div>
        <div className="flightsWraperContainer">
          <div className="leftSideRender">

          <img src={BlackPlane} />&nbsp;&nbsp;
            <strong>{originCode} to {destCode}</strong>
            <div className="horidzontalGreyLine" />
            <SegmentRowLeft flightID={flightID} />
          </div>
          <div className="vertGreyLine" />
          <div className="rightSideRender">
            <img src={BlackPlane} />&nbsp;&nbsp;
            <strong>{destCode} to {originCode}</strong>
            <SegmentRowRight flightID={flightID} />
          </div>
          <div className="addToTripDiv">
            <p className="tripTotalCostText">Flight total:</p>
            <p className="">{flightPrice}</p>
            {/* <button
              className={
                isClicked ? "addToTripButtonSelected" : "addToTripButton"
              }
              onClick={handleAddToTrip}
            >
              {isClicked ? 'Added to trip' : 'Add to trip'}
            </button> */}
            <AddToTripButton flightID={flightID} />
          </div>
        </div>
        <br />
        <hr
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "4px",
            width: "93%",
            marginLeft: "3%",
          }}
        />
      </div>
    </>
  );
}

export default SegmentWrapper;

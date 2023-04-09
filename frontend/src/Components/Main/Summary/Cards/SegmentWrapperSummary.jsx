import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import SegmentRowRight from "../../Flights/FlightCard/SegmentRowRight";
import SegmentRowLeft from "../../Flights/FlightCard/SegmentRowLeft";
import "../../Flights/FlightCard/FlightCard.css";
import "./SegmentWrapperSummary.css";
// import Flights from "../Flights";

function SegmentWrapperSummary(flightID) {
  const [flightIdState, setFlightID] = useState("");
  const [destCode, setDestCode] = useState("");
  const [originCode, setOriginCode] = useState("");
  const [flightPrice, setFlightPrice] = useState("");
  console.log(flightID);

  /* 
  
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
        // console.log(data);
        setFlightPrice(data);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
    localStorage.setItem("flightID", flightID);

  });
  
  const flightPriceUrl = 'http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=` +
            encodedFlightID;
  
  */

  useEffect(() => {
    setFlightID(flightID.flightID);
    const fetchData = async () => {
      const encodedFlightID = encodeURI(flightIdState);
      const url =
        "http://127.0.0.1:8080/api/flights/getDestCodeByFlightID?flightID=" +
        encodedFlightID;
      const originUrl =
        "http://127.0.0.1:8080/api/flights/getOriginCodeByFlightID?flightID=" +
        encodedFlightID;
      const flightPriceUrl = "http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=" +
        encodedFlightID;
      console.log(url);

      try {
        const response = await axios.get(url);
        const data = response.data;
        setDestCode(data);
        console.log(destCode);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(originUrl);
        const data = response.data;
        setOriginCode(data);
        console.log(originCode);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(flightPriceUrl);
        const data = response.data;
        setFlightPrice(data);
        console.log(originCode);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
  });

  return (
    <>
      {/* <p>{destCode} j</p> */}
      <div className="summaryContentCardContainer">
        <h1>Your flight:</h1>
        <div className="flightsWraperContainerInSummary">
          <div className="leftSideRender">
            <img src={BlackPlane} />
            {originCode} to {destCode}
            <div className="horidzontalGreyLine" />
            <SegmentRowLeft flightID={flightID.flightID} />
          </div>
          <div className="vertGreyLine" />
          <div className="rightSideRender">
            <img src={BlackPlane} />
            {destCode} to {originCode}
            <SegmentRowRight flightID={flightID.flightID} />
          </div>
        </div>
        <div className="addToTripDivInSummary">
          {/* <p>her</p> */}
          {/* <p className="">{flightPrice}</p> */}
          <p style={{ display: "inline" }}> Flight total: {flightPrice} </p>
          <p style={{ display: "inline", marginLeft: "10%" }}>
            {" "}
            Remove from trip.
          </p>
        </div>
        <br />

        {/* <hr
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "4px",
            width: "93%",
            marginLeft: "3%",
          }}
        /> */}
      </div>
    </>
  );
}

export default SegmentWrapperSummary;

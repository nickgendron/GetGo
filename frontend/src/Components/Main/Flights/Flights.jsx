import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Flights.css";

function flightCards() {
  return (
    <>
      <div className="grid-wrapper">
        <div className="grid-container grid-container-left">
          <div className="grid-item grid-item-1">
            <p className="flightDurationText">3 hours and 45 minutes</p>
          </div>
          <div className="grid-item grid-item-2">
            <p>Korean Air</p>
            <button className="blueAirportBubbleNew">SYD</button>
            <p>
              Tue, Aug 1 <br /> <strong>6:30 am</strong>
            </p>
          </div>
          <div className="grid-item grid-item-3">
            {/* <img className="arrowImage" src={arrowIcon}></img> */}
            to
          </div>
          <div className="grid-item grid-item-4">
            <p>Korean Air</p>
            <button className="whiteAirportBubbleNew">MSY</button>
            <br />
            <p>
              Tue, Aug 1 <br /> <strong>6:30 am</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Flights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    async function fetchFlights() {
      const response = await fetch(
        "localhost:8080/api/flights/getSegmentBySegmentID?segmentID=936817f5-6ef7-4849-ace3-4c6ada708603"
      );
      const data = await response.json();
      setFlights(data);
    }
    fetchFlights();
  }, []);

  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>

      <div className="flightsContent">
        <h1 className="flightsToCity">Flights to [city, country]: </h1>
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
        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
        <div className="divThatHoldsFlightCards">
          {flightCards()}

          {flightCards()}

          {flightCards()}
        </div>
      </div>
    </>
  );
}
export default Flights;

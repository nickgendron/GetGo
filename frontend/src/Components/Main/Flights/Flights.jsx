import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./Flights.css";
import SegmentWrapper from "./FlightCard/SegmentWrapper";

function Flights(offerIDNew) {
  const [flightIDs, setFlightIDs] = useState([]);
  const [flightPrices, setFlightPrices] = useState([]);

  useEffect(() => {
    const offerID = sessionStorage.getItem("flightOfferID");
    
    async function fetchData() {
      try {
        const flightSegmentsResponse = await axios.get(
          `http://127.0.0.1:8080/api/flights/getFlightsFromOfferID?offerID=` +
          offerID
        );
        const flightIDs = flightSegmentsResponse.data;

        setFlightIDs(flightIDs);
        setFlightPrices(flightPrices);
      } catch (error) {
      }
    }
    fetchData();
  }, []);

  if (!flightIDs) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>

      <div className="flightsContent">
        <p className="flightsToCity">Flights to {sessionStorage.getItem("whereTo")}: </p>
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
        <br />
        {SegmentWrapper(flightIDs[0])}
        <br />
        {SegmentWrapper(flightIDs[1])}
        <br />
        {SegmentWrapper(flightIDs[2])}
        <br />
        {SegmentWrapper(flightIDs[3])}
        <br />
        {SegmentWrapper(flightIDs[4])}
      </div>
    </>
  );
}
export default Flights;

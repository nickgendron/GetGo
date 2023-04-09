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
  var offerID = "eae4f88f-b0f0-4e1d-a7f1-76a74021bb13";
  const [flightIDs, setFlightIDs] = useState([]);
  const [flightPrices, setFlightPrices] = useState([]);

// console.log(offerID);
// console.log(offerIDNew);
 const offerIDtmp = localStorage.getItem("flightOfferID");
console.log(offerIDtmp);

  useEffect(() => {
    async function fetchData() {
      try {
        const flightSegmentsResponse = await axios.get(
          `http://127.0.0.1:8080/api/flights/getFlightsFromOfferID?offerID=` +
          offerIDtmp
        );
        const flightIDs = flightSegmentsResponse.data;
        // console.log(flightIDs);

        setFlightIDs(flightIDs);
        setFlightPrices(flightPrices);
      } catch (error) {
        // console.error(error);
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
        <h1 className="flightsToCity">Flights to Dubai: </h1>
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

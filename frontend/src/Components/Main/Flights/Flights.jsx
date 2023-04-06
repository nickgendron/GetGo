import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./Flights.css";
import FlightCard from "./FlightCard/FlightCard";
import SegmentRow from "./FlightCard/SegmentRow";
import SegmentWrapper from "./FlightCard/SegmentWrapper";


function GetFlightIdFromOfferId(offerID) {
  const [flightIDs, setFlightIdData] = useState([]);

  useEffect(() => {
    async function getFlightIds() {
      const url =
        "http://127.0.0.1:8080/api/flights/getFlightsFromOfferID?offerID=" +
        offerID;
      const response = await fetch(url);
      const data = await response.json();
      setFlightIdData(data);
    }

    getFlightIds();
  }, []);

  // console.log(flightIDs);
  return flightIDs;
}

function Flights() {
  var offerID = "eae4f88f-b0f0-4e1d-a7f1-76a74021bb13";
  const [flightIDs, setFlightIDs] = useState([]);
  const [flightPrices, setFlightPrices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const flightSegmentsResponse = await axios.get(`http://127.0.0.1:8080/api/flights/getFlightsFromOfferID?offerID=${offerID}`);
        const flightIDs = flightSegmentsResponse.data;
        console.log(flightIDs);
        const flightPrices = await Promise.all(flightIDs.map(async (flightID) => {
          const flightPricesResponse = await axios.get(`http://127.0.0.1:8080/api/flights/getPricesByOfferID?offerID=${offerID}`);

          console.log(flightPricesResponse.data[0]);
          return flightPricesResponse.data[0];
        }));
        setFlightIDs(flightIDs);
        setFlightPrices(flightPrices);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  var wrapper0 = flightIDs[0];
  var wrapper1 = flightIDs[1];
  var wrapper2 = flightIDs[2];
  var wrapper3 = flightIDs[3];
  var wrapper4 = flightIDs[4];
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8080/api/flights/getFlightsFromOfferID?offerID=6d9ac9d5-0c6a-44d9-82a8-ed39a9f44a9f`,
//         {
//           mode: 'cors'
//         }
//       );
//       const data = await response.json();
//       setFlightIDs(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, []);

if (!flightIDs) {
  return <div>Loading...</div>;
}
// console.log(test0);
  
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
        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
        {/* <FlightCard /> */}
        <br/>
        {SegmentWrapper(wrapper0)}
        <br/>
        {SegmentWrapper(wrapper1)}
        <br/>
        {SegmentWrapper(wrapper2)}
        <br/>
        {SegmentWrapper(wrapper3)}
        <br/>
        {SegmentWrapper(wrapper4)}

        {/* <SegmentRow segments={segmentData}/> */}

      </div>
    </>
  );
}
export default Flights;

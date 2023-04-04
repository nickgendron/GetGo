import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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

function GetReturningSegments(flightID) {
  const [returningSegments, setReturningSegments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `http://127.0.0.1:8080/api/flights/getReturningSegmentsByFlightID?flightID=${flightID}`;
      const response = await fetch(url);
      const data = await response.json();
      setReturningSegments(data);
    }

    fetchData();
  }, [flightID]);

  return returningSegments;
}
//8bc9dce6-ec38-4717-abdb-206d6a1577d9

function GetDepartingSegments(flightID) {
  const [departingSegments, setDepartingSegments] = useState([]);
  console.log(flightID);
  useEffect(() => {
    async function fetchData() {
      const url = `http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=${flightID}`;
      const response = await fetch(url);
      const data = await response.json();
      setDepartingSegments(data);
    }

    fetchData();
  }, [flightID]);
  console.log(departingSegments); 
  return departingSegments;
}

function SegmentRowCreator( segments ) {
  const [segmentData, setSegmentData] = useState([]);

  console.log(segments);
  /* Uses promises to ensure that the data gets returned before continuing execution */
  useEffect(() => {
    async function getSegmentData() {
      const promises = segments.map((segmentID) => {
        const url = `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segmentID}`;
        return fetch(url).then((response) => response.json());
      });
      const data = await Promise.all(promises);
      console.log("data from Promise.all", data);
      setSegmentData(data);
      console.log("segmentData state after set", segmentData); // log state here
    }
    console.log("segmentData state after set", segmentData); // log state here

    getSegmentData();
  }, [segments]);

  // if (segmentData.length === 0) {
  //   return <p>Loading...</p>;
  // }
  console.log(segmentData.segnents);

  return segmentData;
}

function Flights() {
  

  // (async () => {
  //   setDepartingSegments(
  //     await GetDepartingSegments("fb6114e0-2efc-4b70-a2a0-8c5ae58117c0")
  //   );
  // })();

  // (async () => {
  //   setReturningSegments(
  //     await GetReturningSegments("fb6114e0-2efc-4b70-a2a0-8c5ae58117c0")
  //   );
  // })();

  // (async () => {
  //   setSegmentData(
  //     await SegmentRowCreator(departingSegments)
  //   );
  // })();
  // setSegmentData(SegmentRowCreator({ segments: departingSegments }));
  // console.log(flightIDs);
  // console.log(departingSegments);
  // console.log(returningSegments);
  // console.log(segmentData);
  // FlightCard.SegmentWrapper("0123  ")
{/* <SegmentRow segments={segmentData}/> */}
  
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
        {SegmentWrapper("fb6114e0-2efc-4b70-a2a0-8c5ae58117c0")}
        <br/>
        {SegmentWrapper("fb6114e0-2efc-4b70-a2a0-8c5ae58117c0")}

        {/* <SegmentRow segments={segmentData}/> */}

      </div>
    </>
  );
}
export default Flights;

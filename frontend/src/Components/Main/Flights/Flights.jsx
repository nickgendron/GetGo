import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Flights.css";
import FlightCard from "./FlightCard/FlightCard";

function process(data) {
  for (var i = 0; i < data.length; i++) {
    FlightCards(data[i]);
  }
}

function FlightCards(segmentID) {
  const segmentIDToTest = [
    "e8d54cd0-5725-4555-8142-13c1b47d5b28",
    "9dfd2772-2d19-4066-8020-0d308493badb",
  ];
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    var url =
      "http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=9dfd2772-2d19-4066-8020-0d308493badb";

    // Make API call here
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Save response data to variables
        const segmentID = data[0].segmentID;
        const flightID = data[0].flightID;
        const originAirportCode = data[0].originAirportCode;
        const destAirportCode = data[0].destAirportCode;
        const departureTime = data[0].departureTime;
        const departureDate = data[0].departureDate;
        const arrivalTime = data[0].arrivalTime;
        const arrivalDate = data[0].arrivalDate;
        const flightDuration = data[0].flightDuration;
        const segmentNumber = data[0].segmentNumber;
        const airlineCode = data[0].airlineCode;
        const flightNumber = data[0].flightNumber;
        const aircraftCode = data[0].aircraftCode;

        // Log variables to console

        // Set state with flights data
        setFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching flights data: ", error);
      });
  }, []);
  return (
    <>
      {flights.map((flight) => (
        <div className="grid-wrapper">
          <div className="grid-container grid-container-left">
            <div className="grid-item grid-item-1">
              <p>
                Delta Airlines <br />{" "}
              </p>
              <p className="flightDurationText">{flight.flightDuration}</p>
            </div>
            <div className="grid-item grid-item-4">empty</div>
            <div className="grid-item grid-item-2">
              {/* <img className="arrowImage" src={arrowIcon}></img> */}
              <button className="blueAirportBubbleNew">
                {flight.destAirportCode}
              </button>
              <p>
                {flight.arrivalDate} <br />{" "}
                <strong>{flight.arrivalTime}</strong>
              </p>
            </div>
            <div className="grid-item grid-item-4">
              {/* <p>{flight.airlineCode}</p> */}
              <button className="whiteAirportBubbleNew">
                {flight.originAirportCode}
              </button>
              <br />
              <p>
                {flight.departureDate} <br />{" "}
                <strong>{flight.departureTime}</strong>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  // }
}

function Flights() {
  const [data, setFlights] = useState([]);

  useEffect(() => {
    // Make API call here
    fetch(
      "http://127.0.0.1:8080/api/flights/getSegmentByFlightID?flightID=5c425a2f-8fb3-4259-a535-a75855260fc8"
    )
      .then((response) => response.json())
      .then((data) => {
        // Save response data to variables

        // Log variables to console

        // Set state with flights data
        setFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching flights data: ", error);
      });
  }, []);

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
          <FlightCard />
      </div>
    </>
  );
}
export default Flights;

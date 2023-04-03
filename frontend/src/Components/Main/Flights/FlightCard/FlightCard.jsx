import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import "./FlightCard.css";

function SegmentWrapper(flightID) {
  // var segmentID[] = {};
  const datatmpRev = [
    {
      airline: "United Airlines",
      outboundAirport: "DXB",
      inboundAirport: "JFK",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "16 hour(s) and 45 minutes",
    },
    {
      airline: "United Airlines",
      outboundAirport: "JFK",
      inboundAirport: "ATL",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "2 hour(s) and 56 minutes",
    },
    {
      airline: "United Airlines",
      outboundAirport: "ATL",
      inboundAirport: "MSY",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "0 hour(s) and 55 minutes",
    },
  ];

  const data = [
    {
      airlineCode: "United Airlines",
      outboundAirport: "MSY",
      inboundAirport: "ATL",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "0 hour(s) and 55 minutes",
    },
    {
      airline: "United Airlines",
      outboundAirport: "ATL",
      inboundAirport: "JFK",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "2 hour(s) and 56 minutes",
    },
    {
      airline: "United Airlines",
      outboundAirport: "JFK",
      inboundAirport: "DBX",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "18 hour(s) and 56 minutes",
    },
  ];

  // console.log(segmentID);
  return (
    <>
      <div className="flightsWraperContainer">
        <div className="leftSideRender">
          <img src={BlackPlane} />
          MSY to DBX
          <br />
          <br />
          {SegmentRow(data)}
          <br />
          {/* {segmentRow()} */}
        </div>
        <div className="vertGreyLine" />
        <div className="rightSideRender">
          <img src={BlackPlane} />
          DBX to MSY
          <br />
          <br />
          {SegmentRow(data)}
          <br />
          {/* {segmentRow()} */}
        </div>
        <div className="addToTripDiv">
          <p className="tripTotalCostText">
            Flight total: <br /> $2121.21
          </p>
          <button className="addToTripButton">Add to trip</button>
        </div>
      </div>
    </>
  );
}

function ApiHandeling() {
  const [flights, setFlights] = useState();
  const [data, setData] = useState();

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
        console.log(departureDate);
        const segmentData =
        {
          originAirportCode: data[0].originAirportCode,
          destAirportCode: data[0].destAirportCode,
          flightDuration: data[0].flightDuration,
          
        };
        SegmentRow(segmentData);
        console.log(segmentData)
        // Set state with flights data
        setFlights(data);

        return segmentData;

      })
      .catch((error) => {
        console.error("Error fetching flights data: ", error);
      });


  }, 

  
  []);
}

function SegmentRow() {
  const [flights, setFlights] = useState();
  const [data, setData] = useState();

  var segmentDataTmp = ApiHandeling();
  console.log(segmentDataTmp);
const segmentData = [
    {
      airlineCode: "United Airlines",
      originAirportCode: "MSY",
      destAirportCode: "ATL",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "0 hour(s) and 55 minutes",
    },
    {
      airline: "United Airlines",
      outboundAirport: "ATL",
      inboundAirport: "JFK",
      date: "Tue, Aug. 1",
      time: "6:30am",
      time2: "8:26am",
      date2: "Wed, Aug. 2",
      timeString: "2 hour(s) and 56 minutes",
    },
    {
      airline: "United Airlines",
      outboundAirport: "JFK",
      inboundAirport: "DBX",
      date: "Tue, Aug. 1",
      departureTime: "6:30am",
      arrivalTime: "8:26am",
      arrivalDate: "Wed, Aug. 2",
      timeString: "18 hour(s) and 56 minutes",
    },
  ];
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
        const departureDateT = data[0].departureDate;
        const arrivalTime = data[0].arrivalTime;
        const arrivalDate = data[0].arrivalDate;
        const flightDuration = data[0].flightDuration;
        const segmentNumber = data[0].segmentNumber;
        const airlineCode = data[0].airlineCode;
        const flightNumber = data[0].flightNumber;
        const aircraftCode = data[0].aircraftCode;

        // Log variables to console

    //    segmentData.push({airline: airline});
        console.log(segmentData);
        // console.log(segmentData)
        // Set state with flights data
        setFlights(data);
      })
      .catch((error) => {
        console.error("Error fetching flights data: ", error);
      });
  }, []);

  return (
    <>
      <div>
        {segmentData.map((segmentData) => (
          <div className="segmentRowParent">
            <div className="div1">
              <div className="horizontalGreyLine" />
              <p className="airlineText">{segmentData.airlineCode}</p>
            </div>
            <div className="div2">
              {" "}
              <button className="whiteAirportBubbleNew">
                {segmentData.originAirportCode}
              </button>
            </div>
            <div className="div3">
              {" "}
              <p>
                {" "}
                {segmentData.departureDate} <br /> &ensp; {segmentData.departureTime}
              </p>
            </div>
            <div className="div4"> </div>

            <div className="div5"> </div>
            <div className="div6"> ------></div>
            <div className="div7"> </div>
            <div className="div8"></div>
            <div className="div9"> </div>
            <div className="div10">
              {" "}
              <button className="blueAirportBubbleNew">
                {segmentData.destAirportCode}
              </button>
            </div>
            <div className="div11">
              {" "}
              <p>
                {" "}
                {segmentData.departureTime} <br /> &ensp; {segmentData.time2}
              </p>
            </div>
            <div className="div14">{segmentData.timeString} </div>
          </div>
        ))}
      </div>
    </>
  );
}

function FlightCard() {
  return (
    <>
      {SegmentWrapper()}
      <br />
      {/* {SegmentWrapper()}
      <br />
      {SegmentWrapper()}
      <br />
      {SegmentWrapper()}
      <br />
      {SegmentWrapper()} */}
      <br />
    </>
  );
}
export default FlightCard;

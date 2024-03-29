import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import ArrowPointer from "../../../Images/arrowPointer.png";

import axios from "axios";

import "./FlightCard.css";



/* Returns the returning segmentIDs */


function SegmentRowLeft(flightID) {

const [segmentIDs, setSegmentIDs] = useState([]);
const [segmentData, setSegmentData] = useState([]);
useEffect(() => {
  async function fetchData() {
    try {
      const flightSegmentsResponse = await axios.get(`http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=${flightID.flightID}`);
      const segmentIDs = flightSegmentsResponse.data;
      const segmentData = await Promise.all(segmentIDs.map(async (segmentID) => {
        const segmentResponse = await axios.get(`http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segmentID}`);
        return segmentResponse.data[0];
      }));
      setSegmentIDs(segmentIDs);
      setSegmentData(segmentData);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, [flightID]);

if(segmentData.length == 0){console.log(0);}
console.log(segmentIDs);
console.log(segmentData);

  return (
    <>

      <div>
      <div className="horidzontalGreyLine" />

        {segmentData.map((segment) => (
          <div key={segment.segmentID}>
            {/* <h3>{segment.aircraftCode}</h3>
              <p>{segment.aircraftCode}</p> */}
            {/* {segmentData.map(segments => ( */}

            <div className="segmentRowParent">
              <div className="div1">
                <div className="horidzontalGreyLine" />
                <br/>
                <p className="airlineText">
                  {segment.airlineCode}  {segment.flightNumber}
                </p>
              </div>
              <div className="div2">
                {" "}
                <button className="whiteAirportBubbleNew">
                  {segment.originAirportCode}
                </button>
              </div>
              <div className="div3">
                {" "}
                <p>
                  {" "}
                  {segment.departureTime} <br /> {segment.departureDate}
                </p>
              </div>
              <div className="div4"> </div>
              <div className="div5"> </div>
              <div className="div6"> <img src={ArrowPointer}/></div>
              <div className="div7"> </div>
              <div className="div8"></div>
              <div className="div9"> </div>
              <div className="div10">
                {" "}
                <button className="blueAirportBubbleNew">
                  {segment.destAirportCode}
                </button>
              </div>
              <div className="div11">
                {" "}
                <p>
                  {" "}
                  {segment.arrivalTime} <br /> &ensp; {segment.arrivalDate}
                </p>{" "}
              </div>
              <div className="div14">{segment.flightDuration}</div>
            </div>
            {/* <div className="div14">{segment.flightDuration}} </div> */}
          </div>
        
        ))}
      </div>
    </>
  );
}
export default SegmentRowLeft;

import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";

import "./FlightCard.css";

function SegmentRow({ segmentID }) {
  //   console.log("WHERE IT NEEDS TO WORK: " + segments);

    console.log({segmentID});
  console.log("HERE");
  const [segmentData, setSegmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segmentID}`
        );
        setSegmentData(response.data);
    }
    fetchData();
  }, []);

  if (isLoading) {
    console.log(segmentData);

    return <p>Loading...</p>;
  }
  console.log(segmentData);
  return (
    <>
      <div>
        {segmentData.map((segment) => (
          <div key={segment.segmentID}>
            {/* <h3>{segment.aircraftCode}</h3>
            <p>{segment.aircraftCode}</p> */}

            {/* {segmentData.map(segments => ( */}
            <div className="segmentRowParent">
              <div className="div1">
                <div className="horizontalGreyLine" />
                <br />
                <p className="airlineText">{segment.airlineCode} &ensp; {segment.flightNumber}</p>
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
                  {segment.arrivalDate} <br /> &ensp; {segment.departureDate}
                </p>
              </div>
              <div className="div4"> </div>
              <div className="div5"> </div>
              <div className="div6"> ---------></div>
              <div className="div7"> </div>
              <div className="div8"></div>
              <div className="div9"> </div>
              <div className="div10">
                {" "}
                <button className="blueAirportBubbleNew">{segment.destAirportCode}</button>
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
export default SegmentRow;


  /* Uses promises to ensure that the data gets returned before continuing execution */
  // useEffect(() => {
  //     async function getSegmentData() {
  //     const promises = segmentData.map((segmentID) => {
  //         const url = `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=39ef1ee1-c83b-4b84-90a5-59039cbce4ff`;
  //         return fetch(url).then((response) => response.json());
  //     });
  //     const data = await Promise.all(promises);
  //     // console.log("data from Promise.all", data);
  //     setSegmentData(data);
  //     // console.log("segmentData state after set", segmentData); // log state here
  //     }

  //     getSegmentData();
  // }, []);

  // useEffect(() => {
  //   console.log(segmentData);
  // }, []);
//   segmentID = "39ef1ee1-c83b-4b84-90a5-59039cbce4ff";
  /* Uses promises to ensure that the data gets returned before continuing execution */
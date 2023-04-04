import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import SegmentRow from "./SegmentRow";
import SegmentRowRight from "./SegmentRowRight";
import "./FlightCard.css";
import Flights from "../Flights";

function GetReturningSegments(flightID) {
  const [returningSegments, setReturningSegments] = useState([]);
  const storedReturningData = localStorage.getItem("returningSegments");
  const [isLoadingReturning, setLoadingReturning] = useState(true);

  console.log(flightID);
  useEffect(() => {
    async function fetchData() {
      const url =
        "http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=" +
        flightID.flightID;
      const response = await fetch(url);
      const data = await response.json();
      setReturningSegments(data);
      setLoadingReturning(false);
      localStorage.setItem("returningSegments", JSON.stringify(data));
    }
    if (storedReturningData) {
      setReturningSegments(JSON.parse(storedReturningData));
      setLoadingReturning(false);
    } else {
      fetchData();
    }
    console.log(returningSegments);
  }, []);
}

function SegmentWrapper(flightID) {
  // GetReturningSegments(flightID);
  const [departingSegments, setDepartingSegments] = useState([]);
  const [returningSegments, setReturningSegments] = useState([]);
  const [isLoadingReturning, setLoadingReturning] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const storedData = localStorage.getItem("departingSegments");
  const storedReturningData = localStorage.getItem("returningSegments");
  console.log(flightID);
  useEffect(() => {


    async function fetchData() {
      const url =
        "http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=" +
        flightID.flightID;
      const response = await fetch(url);
      const data = await response.json();
      setDepartingSegments(data);
      setIsLoading(false);
      localStorage.setItem("departingSegments", JSON.stringify(data));
    }

    if (storedData) {
      setDepartingSegments(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      fetchData();
    }

    async function fetchDataReturning() {
      const url =
        "http://127.0.0.1:8080/api/flights/getReturningSegmentsByFlightID?flightID=" +
        flightID.flightID;
      const response2 = await fetch(url);
      const data2 = await response2.json();
      setReturningSegments(data2);
      setLoadingReturning(false);
      localStorage.setItem("returningSegments", JSON.stringify(data2));
    }

    if (storedReturningData) {
      setReturningSegments(JSON.parse(storedReturningData));
      setLoadingReturning(false);
    } else {
      fetchDataReturning();
    }
  }, []);

  if (isLoading) {
    return null;
  } else {
    console.log(departingSegments);
  }
  console.log(returningSegments);
  //   if(isLoadingReturning) {return null;} else {console.log(returningSegments)};

  return (
    <>
      <div>
        {departingSegments.map((segment) => (
          <div key={segment.segmentID}>
            <div className="flightsWraperContainer">
              <div className="leftSideRender">
                {/* <img src={BlackPlane} />
                MSY to DBX */}
                <br />
                <SegmentRow key={segment.segmentID} segmentID={segment} />

                <br />
              </div>
              <div className="vertGreyLine" />
              <div className="rightSideRender">
                {/* <img src={BlackPlane} />
                DBX to MSY */}
                <br /> <SegmentRowRight flightID={flightID} />
                {/* <SegmentRow segments={departingSegments} /> */}
                <br />
              </div>
              <div className="addToTripDiv">
                <p className="tripTotalCostText">
                  Flight total: <br /> $2121.21
                </p>
                <button className="addToTripButton">Add to trip</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    // <div>
    //     {segmentData.map((segment) => (
    //       <div key={segment.segmentID}>
    //   <div className="flightsWraperContainer">
    //     <div className="leftSideRender">
    //       <img src={BlackPlane} />
    //       MSY to DBX
    //       <br />
    //       <SegmentRow segments={departingSegments} />
    //       <br />
    //     </div>
    //     <div className="vertGreyLine" />
    //     <div className="rightSideRender">
    //       <img src={BlackPlane} />
    //       DBX to MSY
    //       <br />
    //       <SegmentRow segments={departingSegments}/>
    //       <br />
    //     </div>
    //     <div className="addToTripDiv">
    //       <p className="tripTotalCostText">
    //         Flight total: <br /> $2121.21
    //       </p>
    //       <button className="addToTripButton">Add to trip</button>
    //     </div>
    //     ))}
    //     </div>
    //     </div>
  );
}

export default SegmentWrapper;

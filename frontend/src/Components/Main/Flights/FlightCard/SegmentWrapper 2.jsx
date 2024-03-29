import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import SegmentRow from "./SegmentRow";
import SegmentRowRight from "./SegmentRowRight";
import SegmentRowLeft from "./SegmentRowLeft";
import "./FlightCard.css";
import Flights from "../Flights";

function SegmentWrapper(flightID) {
  //   var test = GetReturningSegments(flightID);
  // console.log(test);

  const [departingSegments, setDepartingSegments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const storedData = localStorage.getItem("departingSegments");
  console.log(flightID);
  //   useEffect(() => {

  //getPriceByFlightID

  const [flightPrice, setFlightPrice] = useState([]);

  // useEffect(() => {
  //      function fetchData() {
  //         const response = fetch("http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=" + flightID);
  //         setFlightPrice(response);
  //     }
  //     fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=${flightID}`,
          {
            mode: 'cors'
          }
        );
        const data = await response.json();
        setFlightPrice(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  if (!flightPrice) {
    return <div>Loading...</div>;
  }
  console.log(flightPrice);

  return (
    <>
      <div>
        {/* <hr
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "4px",
            width: "93%",
            marginLeft: "3%",
          }}
        /> */}
        <div className="flightsWraperContainer">
          <div className="leftSideRender">
            <img src={BlackPlane} />
            MSY to DBX
            <div className="horidzontalGreyLine" />
            <SegmentRowLeft flightID={flightID} />
          </div>
          <div className="vertGreyLine" />
          <div className="rightSideRender">
            <img src={BlackPlane} />
            DBX to MSY
            <SegmentRowRight flightID={flightID} />
            {/* <SegmentRow segments={departingSegments} /> */}
          </div>
          <div className="addToTripDiv">
            <p className="tripTotalCostText">
              Flight total:</p> 
              <p className="flightCostText"><strong><strong>{flightPrice}</strong></strong></p>
            <button className="addToTripButton">Add to trip</button>
          </div>
        </div>
        <br />
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
      </div>
    </>
  );
}

export default SegmentWrapper;

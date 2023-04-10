import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import SegmentRowRight from "../../Flights/FlightCard/SegmentRowRight";
import SegmentRowLeft from "../../Flights/FlightCard/SegmentRowLeft";
import "../../Flights/FlightCard/FlightCard.css";
import "./SegmentWrapperSummary.css";
import RemoveFromTrip from "./RemoveFromTrip"
// import Flights from "../Flights";

function SegmentWrapperSummary(flightID) {
  const [flightIdState, setFlightID] = useState("");
  const [destCode, setDestCode] = useState("");
  const [originCode, setOriginCode] = useState("");
  const [flightPrice, setFlightPrice] = useState("");
  console.log(flightID);


  function HandleRemoveFromVacation() {
    console.log("Remove from vacation clicked");
  
      const fetchData = async () => {

        console.log("Vacation ID: " + sessionStorage.getItem("vacationID"));
        try {
          const attractionResponse = await axios.delete(
            `http://127.0.0.1:8080/api/vacations/deleteFlightByVacationID?vacationID=` +
            sessionStorage.getItem("vacationID")
          );
          const vacationID = attractionResponse.data;
          console.log(attractionResponse.data);
          sessionStorage.removeItem("choosenFlightIDForVacation");
          console.log("Vacation ID: " + sessionStorage.getItem("vacationID"));
  
          if(attractionResponse.data === "Success"){
            window.location.reload();
          }
          window.location.reload();

        } catch (error) {
          console.error(error);
        }
    
      }    
      fetchData();

  
  }
 
  useEffect(() => {
    setFlightID(flightID.flightID);
    const fetchData = async () => {
      const encodedFlightID = encodeURI(flightIdState);
      const url =
        "http://127.0.0.1:8080/api/flights/getDestCodeByFlightID?flightID=" +
        encodedFlightID;
      const originUrl =
        "http://127.0.0.1:8080/api/flights/getOriginCodeByFlightID?flightID=" +
        encodedFlightID;
      const flightPriceUrl = "http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=" +
        encodedFlightID;
      console.log(url);

      try {
        const response = await axios.get(url);
        const data = response.data;
        setDestCode(data);
        console.log(destCode);
      } catch (error) {
      }
      try {
        const response = await axios.get(originUrl);
        const data = response.data;
        setOriginCode(data);
        console.log(originCode);
      } catch (error) {
      }
      try {
        const response = await axios.get(flightPriceUrl);
        const data = response.data;
        setFlightPrice(data);
        console.log(originCode);
      } catch (error) {
      }
    };

    fetchData();
  });

  return (
    <>
      {/* <p>{destCode} j</p> */}
        <div className="flightsWraperContainerInSummary">
          <div className="leftSideRender">
            <img src={BlackPlane} />
            {originCode} to {destCode}
            <div className="horidzontalGreyLine" />
            <SegmentRowLeft flightID={flightID.flightID} />
          </div>
          <div className="vertGreyLine" />
          <div className="rightSideRender">
            <img src={BlackPlane} />
            {destCode} to {originCode}
            <SegmentRowRight flightID={flightID.flightID} />
          </div>
        </div>
        <div className="addToTripDivInSummary">
          {/* <p>her</p> */}
          {/* <p className="">{flightPrice}</p> */}
          <p style={{ display: "inline", marginLeft: "10%",  color: "#3f52e3", fontFamily: "work sans" }}> Flight total: {flightPrice} </p>
          <button className="removeFromTripButton"  onClick={HandleRemoveFromVacation}>
            {" "}
            Remove from trip.
          </button>
        </div>
        <br />
    </>
  );
}

export default SegmentWrapperSummary;

import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";
import SegmentRowRight from "./SegmentRowRight";
import SegmentRowLeft from "./SegmentRowLeft";
import "./FlightCard.css";
import Flights from "../Flights";

import { useDispatch } from 'react-redux';


function SegmentWrapper(flightID) {


  const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};

  const [departingSegments, setDepartingSegments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const storedData = localStorage.getItem("departingSegments");

  const [flightPrice, setFlightPrice] = useState();
  const [originCode, setOriginCode] = useState("");
  const [destCode, setDestCode] = useState("");
  const dispatch = useDispatch();
  function handleAddToTrip() {
    // Perform the desired action when the button is clicked
    // console.log(flightID); // You can access the locationID value here
    // ... Other logic
    // TESTER ID: bbea3602-237e-4136-a9e0-6507ab2db15f
    async function addObjectToVacation() {
      const url = "http://127.0.0.1:8080";
      
      // const vacationID = "890a557e-7928-4cee-9959-3179322c38cc";

      // const hotelsEndpoin 
       const flightEndpoints= "/api/vacations/addFlight?flightID=" + flightID + "&vacationID=" + sessionStorage.getItem("vacationID");

       console.log(sessionStorage.getItem("vacationID"));
      const apiCall = url + flightEndpoints;
      try {
        const response = await axios.post(apiCall);
        const data = response.json();
      

      } catch (error) {}

      sessionStorage.removeItem("choosenFlightIDForVacation");
      sessionStorage.setItem("choosenFlightIDForVacation", flightID);

    }

    addObjectToVacation();
    console.log(sessionStorage.getItem("choosenFlightIDForVacation")); // You can access the locationID value here

  }

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://127.0.0.1:8080/api/flights/getDestCodeByFlightID?flightID=" +
        flightID;
      const originUrl =
        "http://127.0.0.1:8080/api/flights/getOriginCodeByFlightID?flightID=" +
        flightID;
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=` +
            flightID,
          {
            mode: "cors",
          }
        );
        const data = await response.json();
        // console.log(data);
        setFlightPrice(data);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(url);
        const data = response.data;
        setDestCode(data);
        console.log(destCode);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(originUrl);
        const data = response.data;
        setOriginCode(data);
        console.log(originCode);
      } catch (error) {
        // console.error(error);
      }
    };

    asyncLocalStorage.setItem('flightID', flightID).then(function () {
      return asyncLocalStorage.getItem('flightID');
  }).then(function (value) {
      console.log('Value has been set to:', value);
  });

    fetchData();


  });

  return (
    <>
      <div>
        <div className="flightsWraperContainer">
          <div className="leftSideRender">
            <img src={BlackPlane} />
            {originCode} to {destCode}
            <div className="horidzontalGreyLine" />
            <SegmentRowLeft flightID={flightID} />
          </div>
          <div className="vertGreyLine" />
          <div className="rightSideRender">
            <img src={BlackPlane} />
            {destCode} to {originCode}
            <SegmentRowRight flightID={flightID} />
          </div>
          <div className="addToTripDiv">
            <p className="tripTotalCostText">Flight total:</p>
            <p className="">{flightPrice}</p>
            <button
              className="addToTripButton"
              onClick={handleAddToTrip}
            >
              Add to trip
            </button>
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

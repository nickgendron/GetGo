import React, { Component, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SegmentWrapper from "../Flights/FlightCard/SegmentWrapper";
import "./Summary.css";
import SegmentWrapperSummary from "./Cards/SegmentWrapperSummary";
import SummaryGridCard from "./Cards/SummaryGridCard";
import EmptyCards from "./EmptyCards/EmptyCards";
import axios from "axios";

export default function Summary() {
  const [flightID, setFlightID] = useState("");
  const [hotelID, setHotelID] = useState("");
  const [attractionID, setAttractionID] = useState([]);
  const [isVacationSelected, setIsVacationSelected] = useState(false);

  var locationID;

  const [flightPrice, setFlightPrice] = useState();
  const [originCode, setOriginCode] = useState("");
  const [destCode, setDestCode] = useState("");
  const [hotelInfo, setHotelInfo] = useState([]);
  const [vacationID, setVacationID] = useState();

  const [locationInfo, setLocationInfo] = useState([]);
  const [attractionInfo, setAttractionInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setVacationID(sessionStorage.getItem("vacationID"));

      const hotelId =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?hotelID=" +
        sessionStorage.getItem("choosenHotelIDForVacation");

      const attractionGroupId =
        "http://127.0.0.1:8080/api/vacations/getAttractionsByGroupingID?vacationID=" +
        sessionStorage.getItem("vacationID");

      try {
        const response = await axios.get(attractionGroupId);
        const data = response.data;
        setAttractionInfo(data);
        console.log(attractionInfo);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(hotelId);
        const data = response.data[0];
        setLocationInfo(data);
        console.log(locationInfo);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>

      <div className="summaryRoot">
        <h1 className="flightsToCity">
          Overall trip for: {sessionStorage.getItem("whereTo")}{" "}
        </h1>
        <hr
          style={{
            background: "black",
            color: "#F3F3F3",
            borderColor: "black",
            height: "4px",
            width: "93%",
            marginLeft: "3%",
            borderRadius: "20px",
          }}
        />
        <div className="summaryContentCardContainer">
          <h1 className="summaryCardSperatorText">Your flight:</h1>

          {sessionStorage.getItem("choosenFlightIDForVacation") ? (
            <SegmentWrapperSummary
              flightID={sessionStorage.getItem("choosenFlightIDForVacation")}
            />
          ) : (
            <p>No flight selected.</p>
          )}
        </div>

        <div className="summaryContentCardContainer">
          <h1 className="summaryCardSperatorText">Your Hotel: </h1>

          {locationInfo != undefined ? (
            <SummaryGridCard
              name={locationInfo.hotelName}
              address={locationInfo.fullAddress}
              uniqueID={locationInfo.hotelID}
              rating={locationInfo.rating}
              priceLevel={locationInfo.price_level}
              description={locationInfo.description}
              images={locationInfo.dphotosURL}
              place="hotel"
            />
          ) : (
            <EmptyCards />
          )}
        </div>

        <div className="summaryContentCardContainer">
          <h1 className="summaryCardSperatorText">Your Attractions: </h1>

          {attractionInfo ? (
            attractionInfo.map((attraction) => (
              <SummaryGridCard
                key={attraction.attractionID}
                name={attraction.hotelName}
                address={attraction.fullAddress}
                uniqueID={attraction.attractionID}
                rating={attraction.rating}
                priceLevel={attraction.price_level}
                description={attraction.description}
                images={attraction.dphotosURL}
                place="attrication"
              />
            ))
          ) : (
           <p>HERE</p>
          )}
        </div>
      </div>
    </>
  );
}

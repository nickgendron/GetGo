import React, { Component, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SegmentWrapper from "../Flights/FlightCard/SegmentWrapper";
import "./Summary.css";
import SegmentWrapperSummary from "./Cards/SegmentWrapperSummary";
import SummaryGridCard from "./Cards/SummaryGridCard";
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

  console.log("SS VACATION ID:  " + sessionStorage.getItem("vacationID"));
  useEffect(() => {
    const fetchData = async () => {
      // const flightIDDynamic = localStorage.getItem("flightID");

      setVacationID(sessionStorage.getItem("vacationID"));
      console.log("AFTER ADDING STATE: " + vacationID);
      // const url =
      //   "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?locationID=";
      // const hotelId =
      //   "http://127.0.0.1:8080/api/vacations/getSelectedHotelID?vacationID=" +
      //   sessionStorage.getItem("vacationID");

      //   console.log(hotelId);
      // try {
      //   const response = await axios.get(hotelId);

      //   sessionStorage.setItem("selectedHotelIDThatWasPulledFromDatabaseForSummary", response.data);
      //   const data = response.data;
      //   console.log(data);
      //   setFlightPrice(data);
      // } catch (error) {}

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
      // console.log(data);

      // try {
      //   const response = await axios.get(url);
      //   const data = response.data;
      //   setDestCode(data);
      //   console.log(destCode);
      // } catch (error) {
      //   // console.error(error);
      // }
      // try {
      //   const response = await axios.get(hotelId);
      //   const data = response.data;
      //   setOriginCode(data);
      // } catch (error) {
      //   // console.error(error);
      // }
      // try {
      //   const hotelResponse = await axios.get(
      //     `http://127.0.0.1:8080/api/hotels/getHotelByRandomID?hotelUUID=` +
      //       sessionStorage.getItem("choosenHotelIDForVacation")
      //   );
      //   console.log(hotelResponse.data);
      //   const hotels = hotelResponse.data;
      //   setHotelInfo(hotels);

      //   // Save data to localStorage
      //   // localStorage.setItem(
      //   //   "hotelData",
      //   //   JSON.stringify({ location, hotels })
      //   // );
      // } catch (error) {
      //   console.error(error);
      // }
    };


    fetchData();
    const flightIDDynamic = localStorage.getItem("flightID");
    // console.log(flightPrice);
    console.log(attractionInfo.length);
  }, []);

  const handleRemoveAttraction = (uniqueID) => {
    // Log the uniqueID when the button is clicked
  };

  console.log(
    sessionStorage.getItem("selectedHotelIDThatWasPulledFromDatabaseForSummary")
  );
if(sessionStorage.getItem("choosenFlightIDForVacation") == null){
  console.log("NULL");
}
  // console.log(locationInfo);

  console.log(localStorage.getItem("hotelID"));
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
          ) : (<p>No flight selected.</p>)}
        </div>

        <div className="summaryContentCardContainer">
          <h1 className="summaryCardSperatorText">Your Hotel: </h1>

          {locationInfo ? (
          <SummaryGridCard
            name={locationInfo.hotelName}
            address={locationInfo.fullAddress}
            uniqueID={locationInfo.hotelID}
            rating={locationInfo.rating}
            priceLevel={locationInfo.price_level}
            description={locationInfo.description}
            images={locationInfo.dphotosURL}
            place="hotel"
            // locationID={hotel.location_id}
          />

          ) : (<p>No hotel selected.</p> )}
        </div>

        <div className="summaryContentCardContainer">
          <h1 className="summaryCardSperatorText">Your Attractions: </h1>

          {attractionInfo  ? (
            attractionInfo.map((attraction) => (
              <SummaryGridCard
              key={attraction.attractionID}
                name={attraction.hotelName}
                address={attraction.fullAddress}
                uniqueID={attraction.hotelID}
                rating={attraction.rating}
                priceLevel={attraction.price_level}
                description={attraction.description}
                images={attraction.dphotosURL}
                place="attrication"
                onButtonClick={handleRemoveAttraction}
                // locationID={hotel.location_id}
              />
            ))
          ) : (
            <p>No attractions selected. </p>
          )}
        </div>
        {/* 
        <div className="summaryContentCardContainer">
          <h1 className="summaryCardSperatorText">Your Attractions: </h1>

              {attractionInfo.map((attraction) => (
                <SummaryGridCard
                  name={attraction.attractionName} />
              ))}
        </div> */}
      </div>
    </>
  );
}

{
  /* 
          {attractionInfo ? (
            attractionInfo.map((hotel) => (
              <SummaryGridCard
                name={hotel.hotelName}
                address={hotel.fullAddress}
                uniqueID={hotel.hotelID}
                type={"hotel"}
                rating={hotel.rating}
                priceLevel={hotel.price_level}
                description={hotel.description}
                images={hotel.images_url}
                // locationID={hotel.location_id}
                place="hotel"
              />
            ))
          ) : (
            <p>No attractions available</p>
          )} */
}

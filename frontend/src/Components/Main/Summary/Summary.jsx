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

  useEffect(() => {
    const fetchData = async () => {
      const flightIDDynamic = localStorage.getItem("flightID");

      const url =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?locationID=";
      const hotelId =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?locationID=" + locationID;
        
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=` + flightIDDynamic);
          const data = response.json();
          setFlightPrice(data);
      } catch (error) {}
        // console.log(data);
      
      try {
        const response = await axios.get(url);
        const data = response.data;
        setDestCode(data);
        console.log(destCode);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(hotelId);
        const data = response.data;
        setOriginCode(data);
        console.log(originCode);
        
      } catch (error) {
        // console.error(error);
      }
      try {
        const hotelResponse = await axios.get(
          `http://127.0.0.1:8080/api/hotels/getHotelByRandomID?hotelUUID=` + sessionStorage.getItem("choosenHotelIDForVacation")
        );
        console.log(hotelResponse.data);
        const hotels = hotelResponse.data;
        setHotelInfo(hotels);

        // Save data to localStorage
        // localStorage.setItem(
        //   "hotelData",
        //   JSON.stringify({ location, hotels })
        // );
      } catch (error) {
        console.error(error);
      }
    };

   

    fetchData();
    const flightIDDynamic = localStorage.getItem("flightID");
    console.log(flightIDDynamic);
  },[]);

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

  const flightIDtmp = asyncLocalStorage.getItem('flightID').then(function (result) {console.log(result);});
  console.log(sessionStorage.getItem("choosenHotelIDForVacation"));

  // const flightIDDynamic = sessionStorage.getItem("flightID");
  // console.log(flightIDDynamic);
  // setFlightID("ff3d19ac-20df-4ebf-ade5-a4d34117d718");
  // setHotelID("hotel");
  // setAttractionID("attraction");        
  // if(!isVacationSelected)
  //   return (
  //     <>
  //   <div className="navBarComponent">
  //   <Navbar />
  //   </div>
  //   select a vacation
  //   </>
  //   );
  // }
console.log(localStorage.getItem("hotelID"));
  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>

      <div className="summaryRoot">
        <h1 className="flightsToCity">Overall trip for: link needed </h1>
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
        <div className="segmentWrapperInSummary"> 
        <SegmentWrapperSummary
          flightID={sessionStorage.getItem("choosenFlightIDForVacation")}
        />
        </div>
        <h1>Your Hotel: </h1>


        <div className="gridCardHoldingDiv"style={{ display: "flex", flexDirection: "column" }}>
          {hotelInfo.map((hotel, i) => {
             <h1>Your Hotel: </h1>
            // if (hotel.description) {
              
                <SummaryGridCard
                  key={i}
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
              
            // }
          })}
          </div>

        <div className="summaryContentCardContainer">
          <h1>Your Attractions: </h1>
          <SummaryGridCard 
          locationID={hotelID}
          />
        </div>

      </div>
    </>
  );
}

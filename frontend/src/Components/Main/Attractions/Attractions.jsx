import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import GridCard from "../GridCard/GridCard";
import { Link, useLocation } from 'react-router-dom';
import "./Attractions.css";

function Attractions() {
  const [attricaionInfo, setAttractionInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [segmentData, setSegmentData] = useState([]);


 
  useEffect(() => {
    // Check if hotel data exists in localStorage
    // const hotelData = JSON.parse(localStorage.getItem("hotelData"));
    console.log(sessionStorage.getItem("attractionsOptionsMasterKey"));

    // if (hotelData && hotelData.location === location) {
    //   // Use data from localStorage
    //   setHotelInfo(hotelData.hotels);
    //   setLoading(false);
    // } else {
      // Fetch new hotel data
      async function fetchData() {
        try {
          const attractionsResponse = await axios.get(
            `http://127.0.0.1:8080/api/attractions/getAttractionsByOfferGroupID?offerGroupID=` + sessionStorage.getItem("attractionsOptionsMasterKey")
          );
          console.log(attractionsResponse.data);
          const attractions = attractionsResponse.data;
          setAttractionInfo(attractions);
          setLoading(false);

          // Save data to localStorage
          // localStorage.setItem(
          //   "hotelData",
          //   JSON.stringify({ location, hotels })
          // );
        } catch (error) {
          console.error(error);
        }
      }

      console.log(sessionStorage.getItem("attractionsOptionsMasterKey"));
      fetchData();
    
  }, []);
  console.log(attricaionInfo);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>
      <div className="hotelsContent">
        <p className="hotelsInCity">Attractions in {sessionStorage.getItem("whereTo")}! </p>
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
        <div
          className="gridCardHoldingDiv"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {attricaionInfo.map((attraction, i) => (
            <GridCard
              key={i}
              name={attraction.attrName}
              address={attraction.fullAddress}
              uniqueID={attraction.attractionID}
              type={attraction.type}
              rating={attraction.rating}
              priceLevel={attraction.price_level}
              description={attraction.description}
              images={attraction.photosURL}
              // locationID={attraction.attractionID}
              webURL={attraction.websiteURL}
              place="attraction"
            />
          ))}
        </div>

        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
      </div>
    </>
  );
}
export default Attractions;

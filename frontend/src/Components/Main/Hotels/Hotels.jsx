import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import GridCard from "../GridCard/GridCard";
import "./Hotels.css";

function Hotels() {
  var location = "NewOrleans, Louisiana";

  const [hotelInfo, setHotelInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [segmentData, setSegmentData] = useState([]);

  console.log(location);

 
  useEffect(() => {
    // Check if hotel data exists in localStorage
    const hotelData = JSON.parse(localStorage.getItem("hotelData"));

    if (hotelData && hotelData.location === location) {
      // Use data from localStorage
      setHotelInfo(hotelData.hotels);
      setLoading(false);
    } else {
      // Fetch new hotel data
      async function fetchData() {
        try {
          const hotelResponse = await axios.get(
            `http://127.0.0.1:8080/api/hotels/nearbyHotels?location=` + location
          );
          console.log(hotelResponse.status);
          const hotels = hotelResponse.data;
          setHotelInfo(hotels);
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
      fetchData();
    }
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(localStorage.getItem("hotelID"));

  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>
      <div className="hotelsContent">
        <p className="hotelsInCity">Hotels in Sydney, Australia! </p>
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
        <div className="gridCardHoldingDiv"style={{ display: "flex", flexDirection: "column" }}>
          {hotelInfo.map((hotel, i) => {
            if (hotel.description) {
              return (
                <GridCard
                  key={i}
                  name={hotel.name}
                  address={hotel.fullAddress}
                  type={hotel.type}
                  rating={hotel.rating}
                  priceLevel={hotel.price_level}
                  description={hotel.description}
                  images={hotel.images_url}
                  locationID={hotel.location_id}
                  place="hotel"
                />
              );
            }
            return null;
          })}
        </div>

        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
      </div>
    </>
  );
}

export default Hotels;

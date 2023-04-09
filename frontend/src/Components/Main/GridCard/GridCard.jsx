import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import axios from "axios";
import "./GridCard.css";

function GridCard({
  name,
  address,
  uniqueID,
  type,
  rating,
  priceLevel,
  description,
  images,
  locationID,
  place,
}) {
  const [locationType, setLocationType] = useState("");

  const idType = "hotel"

  useEffect(() => {
    if (place === "hotel") {
      setLocationType("hotels");
    } else if (place === "restaurant") {
      setLocationType("restaurants");
    } else if (place === "attraction") {
      setLocationType("attractions");
    }
  }, []);
  function handleAddToTrip() {
    // Perform the desired action when the button is clicked
    // console.log(flightID); // You can access the locationID value here
    // ... Other logic
    // TESTER ID: bbea3602-237e-4136-a9e0-6507ab2db15f
    async function addObjectToVacation() {
      // console.log(uniqueID);

      const url = "http://127.0.0.1:8080";
      
      // const vacationID = ;

      // const hotelsEndpoin 
       const hotelsEndpoing= "/api/vacations/addHotel?hotelID=" + uniqueID + "&vacationID=" + sessionStorage.getItem("vacationID");

      const apiCall = url + hotelsEndpoing;
      try {
       const response = await axios.post(apiCall);
        const data = response.json();
      

      } catch (error) {}

      sessionStorage.removeItem("choosenHotelIDForVacation");
      sessionStorage.setItem("choosenHotelIDForVacation", uniqueID);

      console.log("session stored hotel id: " + sessionStorage.getItem("choosenHotelIDForVacation"));
    }

    addObjectToVacation();
    console.log(localStorage.getItem("hotelID")); // You can access the locationID value here

  }

  // function handleAddToTrip() {
  //   // Perform the desired action when the button is clicked
  //   console.log(locationID); // You can access the locationID value here
  //   // // ... Other logic
  //   // console.log(type);
  //   // // TESTER ID: bbea3602-237e-4136-a9e0-6507ab2db15f
  //   async function addObjectToVacation() {
  //   const url = "http://127.0.0.1:8080";
  //   const vacationID = "890a557e-7928-4cee-9959-3179322c38cc";

  //   const hotelsEndpoint = "/api/vacations/addHotel?hotelID=" + locationID + "&vacationID=" + vacationID;
  //   const attractionsEndpoint = "/api/vacations/addAttraction?attractionID=" + locationID + "&vacationID=" + vacationID;  
  //   if(locationType === "hotels") {

  //     const apiCall = url + hotelsEndpoint;
  //     try {
  //       const response = await axios.post(apiCall);
  //         const data = response.json();
  //         console.log(data);
  //         localStorage.setItem("hotelID", locationID);
  //     } catch (error) {}
  //   }
  // };
  // // localStorage.setItem("hotelID", locationID);
  // addObjectToVacation();
  // }

  return (
    <>
      <div className="gridCardContainerDiv">
        <div className="leftChildGridCard">
          <div className="headerTextDiv">
            <p className="boldLocationName">
              <strong>
                <strong>{name}</strong>
              </strong>
            </p>
            <p className="leftHeaderText">{address}</p>
          </div>
          <div className="leftSideTextDiv">
            {/* <br /> */}
            {/* <p className="greyText">{type}</p> */}
            <p className="greyText">{description}</p>

            <br />
            <p className="greyText">
              Rating: <StarRating rating={rating} />
            </p>
            <p className="greyText">Price Level: {priceLevel}</p>
          </div>
          <div className="componentButtonDiv">
            <button
              onClick={() => window.open(images, "_blank")}
              className="componentButtons"
            >
              Pictures{" "}
            </button>
            <button className="componentButtons">Website </button>
          </div>
        </div>
        <div className="rightChildGridCard">
          <button
            className="addToTripButton"
            onClick={handleAddToTrip}
          >
            Add to Trip
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
export default GridCard;

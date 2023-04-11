import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import axios from "axios";
import "./GridCard.css";
import { unique } from "jquery";

function GridCard({
  name,
  address,
  uniqueID,
  type,
  rating,
  priceLevel,
  description,
  images,
  webURL,
  locationID,
  place,
}) {
  const [locationType, setLocationType] = useState("");

  // if (place === "hotel") {
  //   setLocationType("hotels");
  // } else if (place === "restaurant") {
  //   setLocationType("restaurants");
  // } else if (place === "attraction") {
  //   setLocationType("attractions");
  // }
  const idType = "hotel";
  const location = useLocation();
  const [addedToTrip, setAddedToTrip] = useState("");

  // useEffect(() => {
  //   if (place === "hotel") {
  //     setLocationType("hotels");
  //   } else if (place === "restaurant") {
  //     setLocationType("restaurants");
  //   } else if (place === "attraction") {
  //     setLocationType("attractions");
  //   }
  // }, []);
  function handleAddToTrip() {
    console.log(uniqueID);
    console.log(location.pathname);

    if (location.pathname === "/hotels") {
      addObjectToVacation(uniqueID);
    }
    if (location.pathname === "/attractions") {
      addAttractionToVacation(uniqueID);
    }

    async function addObjectToVacation() {
      console.log(uniqueID);

      console.log(sessionStorage.getItem("vacationID"));

      const url = "http://127.0.0.1:8080";
      const hotelsEndpoing =
        "/api/vacations/addHotel?hotelID=" +
        uniqueID +
        "&vacationID=" +
        sessionStorage.getItem("vacationID");
      const apiCall = url + hotelsEndpoing;
      try {
        const response = axios.post(apiCall);
        const data = response.json();
      } catch (error) {}

      sessionStorage.removeItem("choosenHotelIDForVacation");
      sessionStorage.setItem("choosenHotelIDForVacation", uniqueID);

      console.log(
        "session stored hotel id: " +
          sessionStorage.getItem("choosenHotelIDForVacation")
      );
    }
    console.log(uniqueID);

    async function addAttractionToVacation() {
      console.log(uniqueID);

      console.log("ADDING ATTRACTION " + uniqueID + " TO VACATION " + sessionStorage.getItem("vacationID"));

      console.log(sessionStorage.getItem("vacationID"));

      const url = "http://127.0.0.1:8080";
      const hotelsEndpoing =
        "/api/vacations/addAttractionToVacation?attractionID=" +
        uniqueID +
        "&vacationID=" +
        sessionStorage.getItem("vacationID");
      const apiCall = url + hotelsEndpoing;
      var tmp;
      try {
        const response = axios.post(apiCall);
        const data = response;
        setAddedToTrip(data);

        sessionStorage.setItem("choosenAttractionIDForVacation", addedToTrip);
        // console.log(data);
      } catch (error) {}
      console.log(sessionStorage.getItem("choosenAttractionIDForVacation"));
      // sessionStorage.removeItem("choosenHotelIDForVacation");
      // sessionStorage.setItem("choosenHotelIDForVacation", uniqueID);

      console.log(
        "session stored attractionGroupID: " +
          sessionStorage.getItem("choosenAttractionIDForVacation")
      );
    }

  }


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
            <div className="descriptionTextDiv">
            <p className="greyText">{description}</p>
            </div>
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
          <button className="addToTripButton" onClick={handleAddToTrip}>
            Add to Trip
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
export default GridCard;

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../../StarRating/StarRating";
import axios from "axios";
import "./SummaryGridCard.css";

function SummaryGridCard({
  name,
  address,
  type,
  rating,
  priceLevel,
  description,
  images,
  webURL,
  locationID,
  place,
  uniqueID,
  onButtonClick,
}, ) {
  const [locationType, setLocationType] = useState("");


console.log(place);

  function handleRemoveFromTrip(){
    console.log("in here");

    console.log("uniqueID:", uniqueID);
    console.log(sessionStorage.getItem("vacationID"));
    if(place === "hotel"){
      console.log("about to remove a god damn hotel");

      try {
        const response = axios.delete("http://127.0.0.1:8080/api/vacations/deleteHotelByVacationID" + sessionStorage.getItem("vacationID"));
              sessionStorage.removeItem("choosenHotelIDForVacation");

        const data = response.data;
        setAttractionInfo(data);
        console.log(attractionInfo);
      } catch (error) {
        // console.error(error);
      }

     window.location.reload();
    }
    else if(place === "attrication"){
      console.log("attrication u up next");
      console.log("uniqueID:", {uniqueID}.data);

      try {
        const response = axios.delete("http://127.0.0.1:8080/api/vacations/removeAttractionFromVacation?attractionID=" + uniqueID + "&vacationID=" + sessionStorage.getItem("vacationID"));
              // sessionStorage.removeItem("choosenHotelIDForVacation");
        
        const data = response.data;
       // setAttractionInfo(data);
        console.log(attractionInfo);
      } catch (error) {
        // console.error(error);
      }
      window.location.reload();


    }
  }

    var locationIdl;

  const [flightPrice, setFlightPrice] = useState();
  const [locationInfo, setLocationInfo] = useState("");
  const [attractionInfo, setAttractionInfo] = useState();
        
  useEffect(() => {
    const fetchData = async () => {
     
        const hotelId =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?hotelID=" + sessionStorage.getItem("selectedHotelIDThatWasPulledFromDatabaseForSummary");
      
        const attractionGroupId = "http://127.0.0.1:8080/api/vacations/getAttractionsByGroupingID?vacationID=" + sessionStorage.getItem("vacationID");

      try {
        const response = await axios.get(attractionGroupId);
        const data = response.data[0];
        setAttractionInfo(data);
      } catch (error) {
        // console.error(error);
      }
      try {
        const response = await axios.get(hotelId);
        const data = response.data[0];
        setLocationInfo(data);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div> 
      
  
      
      <div className="gridCardContainerDivSummary">
        
          <div className="headerTextDivSummary">
            <p className="boldLocationNameSummary">
              <strong>
                <strong>{name}</strong>
              </strong>
            </p>
            <p className="leftHeaderTextSummary">{address}</p>
          </div>
          <div className="leftSideTextDivSummary">
            <br />
            <p className="greyTextSummary">{type}</p>
            <p className="greyTextSummary">{description}</p>

            <br />
            <p className="greyTextSummary">
              Rating: <StarRating rating={rating} />
            </p>
            <p className="greyTextSummary">Price Level: {priceLevel}</p>
          </div>
          <div className="componentButtonDivSummary">
            <button
              onClick={() => window.open(images, "_blank")}
              className="componentButtonsSummary"
            >
              Pictures{" "}
            </button>

            <br/>
            <br/>
            <button className="componentButtonsSummaryInvert">Website </button>
          </div>       
      </div>
      <br/>
      <button onClick={handleRemoveFromTrip} className="removeFromTripDiv">Remove from trip.</button>
      </div>
      <br />

    </>
  );
}
export default SummaryGridCard;

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../../StarRating/StarRating";
import axios from "axios";
import "./SummaryGridCard.css";

function SummaryGridCard(locationID) {

    var locationIdl;
  console.log(locationID.locationID);

  const [flightPrice, setFlightPrice] = useState();
  const [locationInfo, setLocationInfo] = useState("")
  const [destCode, setDestCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?locationID=";
      const hotelId =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?locationID=" + locationID.locationID;
        
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/flights/getPriceByFlightID?flightID=`);
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
        setLocationInfo(data);
        console.log(locationInfo);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
  }, []);



console.log(locationInfo.description);

  return (
    <>
    <div> 
      
  
      
      <div className="gridCardContainerDivSummary">
        
          <div className="headerTextDivSummary">
            <p className="boldLocationNameSummary">
              <strong>
                <strong>{locationInfo.hotelName}</strong>
              </strong>
            </p>
            <p className="leftHeaderTextSummary">{locationInfo.fullAddress}</p>
          </div>
          <div className="leftSideTextDivSummary">
            <br />
            <p className="greyTextSummary">{locationInfo.type}</p>
            <p className="greyTextSummary">{locationInfo.description}</p>

            <br />
            <p className="greyTextSummary">
              Rating: <StarRating rating={locationInfo.rating} />
            </p>
            <p className="greyTextSummary">Price Level: {locationInfo.priceLevel}</p>
          </div>
          <div className="componentButtonDivSummary">
            <button
              onClick={() => window.open(locationInfo.photosURL, "_blank")}
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
      <div className="removeFromTripDiv">Remove from trip.</div>
      </div>
      <br />

    </>
  );
}
export default SummaryGridCard;

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarRating from "../../StarRating/StarRating";
import axios from "axios";
import "./SummaryGridCard.css";

function SummaryGridCard ({
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

    var locationIdl;

  const [flightPrice, setFlightPrice] = useState();
  const [locationInfo, setLocationInfo] = useState("")
  const [destCode, setDestCode] = useState("");
  console.log(sessionStorage.getItem("choosenHotelIDForVacation"));
        
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://127.0.0.1:8080/api/hotels/getHotelByHotelID?locationID=";
      const hotelId =
        "http://127.0.0.1:8080/api/hotels/getHotelByRandomID?=" + sessionStorage.getItem("choosenHotelIDForVacation");
        
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

import React, { useState, useEffect, version } from "react";
import { Link, json, useLocation } from "react-router-dom";
import VerticalLine from "../../../Images/verticalLine.png";
import BlackPlane from "../../../Images/blackPlaneIcon.png";
import axios from "axios";

import "./FlightCard.css";


function GetDepartingSegmentsByFlightID({flightID}){
    const [segmentData, setSegmentData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
  
    useEffect(() => {
      async function fetchData() {
          const response = await axios.get(
            `http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=${flightID}`
          );
          setSegmentData(response.data);
      }
  
  
      fetchData();
    }, []);

    console.log(segmentData);

    return segmentData;
}

function GetSegmentData({segmentID}){

    console.log(segmentID);
    const [segmentData, setSegmentData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
  
    useEffect(() => {
      async function fetchData() {
          const response = await axios.get(
            `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segmentID}`
          );
          setSegmentData(response.data);
      }
  
  
      fetchData();
    }, [segmentID]);

    return segmentData;
}

function SegmentRowRight(flightID) {
    //   console.log("WHERE IT NEEDS TO WORK: " + segments);
    const [departingSegments, setDepartingSegments] = useState([]);
  const [returningSegments, setReturningSegments] = useState([]);
  const [isLoadingReturning, setLoadingReturning] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const storedData = localStorage.getItem("departingSegments");
  const storedReturningData = localStorage.getItem("returningSegments");
  const [segmentData, setSegmentData] = useState([]);

  console.log(flightID);
  useEffect(() => {

    async function fetchData() {
      const url =
        "http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=" +
        flightID.flightID;
      const response = await fetch(url);
      const data = await response.json();
      setDepartingSegments(data);
      setIsLoading(false);
      localStorage.setItem("departingSegments", JSON.stringify(data));
    }

    if (storedData) {
      setDepartingSegments(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  if (isLoading) {
    return null;
  } else {
    console.log(departingSegments);

    // NewSegmentRowRight(departingSegments);


    async function fetchData() {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${departingSegments}`
        );
        setSegmentData(response.data);
    }
    fetchData();
    console.log(segmentData);


    return segmentData;
    // console.log(GetSegmentData(departingSegments[0].data.segmentID));
    // GetSegmentData(departingSegments);

    
  }
console.log(flightID)
}
//   if(isLoadingReturning) {return null;} else {console.log(returningSegments)};
function NewSegmentRowRight({segmentID}){
  
    console.log(segmentID);

    const [segmentData, setSegmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segmentID}`
        );
        setSegmentData(response.data);
    }


    fetchData();
  }, [segmentID]);

//   if (isLoading) {
//     console.log(segmentData);

//     return <p>Loading...</p>;
//   }
  console.log(segmentData);

  
  
}
//   
//     return (
//       <>
//         <div>
//           {segmentID.map((segment) => (
//             <div key={segment.segmentID}>
//               {/* <h3>{segment.aircraftCode}</h3>
//               <p>{segment.aircraftCode}</p> */}
  
//               {/* {segmentData.map(segments => ( */}
//               <div className="segmentRowParent">
//                 <div className="div1">
//                   <div className="horidzontalGreyLine" />
//                   <br />
//                   <p className="airlineText">{segment.airlineCode} &ensp; {segment.flightNumber}</p>
//                 </div>
//                 <div className="div2">
//                   {" "}
//                   <button className="whiteAirportBubbleNew">
//                     {segment.originAirportCode}
//                   </button>
//                 </div>
//                 <div className="div3">
//                   {" "}
//                   <p>
//                     {" "}
//                     {segment.arrivalDate} <br /> &ensp; {segment.departureDate}
//                   </p>
//                 </div>
//                 <div className="div4"> </div>
//                 <div className="div5"> </div>
//                 <div className="div6"> ---------></div>
//                 <div className="div7"> </div>
//                 <div className="div8"></div>
//                 <div className="div9"> </div>
//                 <div className="div10">
//                   {" "}
//                   <button className="blueAirportBubbleNew">{segment.destAirportCode}</button>
//                 </div>
//                 <div className="div11">
//                   {" "}
//                   <p>
//                     {" "}
//                     {segment.arrivalTime} <br /> &ensp; {segment.arrivalDate}
//                   </p>{" "}
//                 </div>
//                 <div className="div14">{segment.flightDuration}</div>
//               </div>
//               {/* <div className="div14">{segment.flightDuration}} </div> */}
//             </div>
//           ))}
//         </div>
//       </>
//   );
  

  export default SegmentRowRight;
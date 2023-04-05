// import React, { useState, useEffect, version } from "react";
// import { Link, json, useLocation } from "react-router-dom";
// import VerticalLine from "../../../Images/verticalLine.png";
// import BlackPlane from "../../../Images/blackPlaneIcon.png";
// import axios from "axios";
// import "./FlightCard.css";
// import Flights from "../Flights";
// import SegmentWrapper from "./SegmentWrapper";

// // function GetFlightIdFromOffer() {
// //   const [flightIDs, setFlightIdData] = useState([]);

// //   var offerID = "b3bdbd08-ef19-4e86-a80f-b93b216c94b0";
// //   useEffect(() => {
// //     var url =
// //       "http://127.0.0.1:8080/api/flights/getFlightsFromOfferID?offerID=" +
// //       offerID;

// //     // Make API call here
// //     fetch(url)
// //       .then((response) => response.json())
// //       .then((data) => setFlightIdData(data));
// //   }, []);

// //   //   for (let i = 0; i < flightIDs.length; i++) {
// //   //     console.log(flightIDs[i]);
// //   //   }
// //}


// // function GetDepartingSegments(flightID) {
// //     const [departingSegments, setDepartingSegments] = useState([]);
  
// //     useEffect(() => {
// //       async function fetchData() {
// //         const url = `http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=${flightID}`;
// //         const response = await fetch(url);
// //         const data = await response.json();
// //         setDepartingSegments(data);
// //       }
  
// //       fetchData();
// //     }, [flightID]);
  
// //     return departingSegments;
// //   }

//   function FlightCard() {
//     return (
//       <>
//         {/* {SegmentWrapper()} */}
//         <br />
//         {/* {SegmentWrapper()} */}
//         {/* {SegmentWrapper()}
//         <br />
//         {SegmentWrapper()}
//         <br />
//         {SegmentWrapper()}
//         <br />
//         {SegmentWrapper()} */}
//         <br />
//       </>
//     );
//   }
//   export default FlightCard;

// // function SegmentWrapper(flightID) {

// //     const [departingSegments, setDepartingSegments] = useState([]);

// //     (async () => {
// //         setDepartingSegments(
// //           await Flights.SegmentRowCreator(departingSegments)
// //         );
// //       })();

// //       console.log(departingSegments);


// //   (async () => {
// //     setDepartingSegments(
// //       await GetDepartingSegments("fb6114e0-2efc-4b70-a2a0-8c5ae58117c0")
// //     );
// //   })();

// //   return (
// //     <>
// //       <div className="flightsWraperContainer">
// //         <div className="leftSideRender">
// //           <img src={BlackPlane} />
// //           MSY to DBX
// //           <br />
// //           <br />
// //           <SegmentRow   />
// //           <br />
// //         </div>
// //         <div className="vertGreyLine" />
// //         <div className="rightSideRender">
// //           <img src={BlackPlane} />
// //           DBX to MSY
// //           <br />
// //           <SegmentRow   />

// //           <br />
// //         </div>
// //         <div className="addToTripDiv">
// //           <p className="tripTotalCostText">
// //             Flight total: <br /> $2121.21
// //           </p>
// //           <button className="addToTripButton">Add to trip</button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // function SegmentRow({segments}) {
// //   console.log("WHERE IT NEEDS TO WORK: " + segments);

// //   console.log(segments);

// //   const [segmentData, setSegmentData] = useState([]);

// //   /* Uses promises to ensure that the data gets returned before continuing execution */
// //     useEffect(() => {
// //         async function getSegmentData() {
// //         const promises = segments.map((segmentID) => {
// //             const url = `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segmentID}`;
// //             return fetch(url).then((response) => response.json());
// //         });
// //         const data = await Promise.all(promises);
// //         // console.log("data from Promise.all", data);
// //         setSegmentData(data);
// //         // console.log("segmentData state after set", segmentData); // log state here
// //         }
// //         getSegmentData();
// //     }, [segments]);

// //     if (segmentData.length === 0) {
// //         return <p>Loading...</p>;
// //     }
// //     console.log(segmentData[0]);

// //  return (
// //     <>
// //         {/* {segmentData.map(segments => ( */}
// //            <div className="segmentRowParent">
// //             <div className="div1">
// //               <div className="horizontalGreyLine" />
// //               <br />
// //               <p className="airlineText">airlineCode</p>
// //             </div>
// //             <div className="div2">
// //               {" "}
// //               <button className="whiteAirportBubbleNew">
// //                 nAirportCode}
// //               </button>
// //             </div>
// //             <div className="div3">
// //               {" "}
// //               <p>
// //                 {" "}
// //                 gments.departureDate} <br /> &ensp;{" "}
// //                egments.departureTime}
// //               </p>
// //             </div>
// //             <div className="div4"> </div>

// //             <div className="div5"> </div>
// //             <div className="div6"> ------></div>
// //             <div className="div7"> </div>
// //             <div className="div8"></div>
// //             <div className="div9"> </div>
// //             <div className="div10">
// //               {" "}
// //               <button className="blueAirportBubbleNew">
// //                 {/* {segments.destAirportCode} */}
// //               </button>
// //             </div>
// //             <div className="div11">
// //               {" "}
// //               <p>
// //                 {" "}
// //                 {/* {segments.arrivalTime} <br /> &ensp;{" "} */}
// //                 {/* {segments.arrivalDate} */}
// //               </p>
// //             </div>
// //             <div className="div14">
// //                nts.flightDuration} 
// //                 </div>
// //            </div>
// //         {/* ))} */}
// //     </>
// //   );
// // }




//   //   console.log(departingSegments);

//   //   useEffect(() => {
//   //     async function getDepartingSegments() {
//   //       let segmentDataArr = [];

//   //       // for (let i = 0; i < segmentID.length; i++) {
//   //       console.log("Flight ID: " + flightID);
//   //       const url = `http://127.0.0.1:8080/api/flights/getDepartingSegmentsByFlightID?flightID=}`;
//   //       const response = await fetch(url);
//   //       const data = await response.json();
//   //       departingSegments.push(data.response[0]);
//   //       // }

//   //       console.log("Hry"); // or do something with the data
//   //     }

//   //     getDepartingSegments();
//   //   }, []);
//   // var segmentID[] = {};
//   // console.log(segmentID);



//   // const segmentID = "020234";
//   //   useEffect(() => {

//   //     async function getSegmentData() {
//   //       let segmentDataArr = [];
//   // const promises = segments.map(segmentID => (
//   //       for (let i = 0; i < segments.length; i++) {
//   //         // console.log("Segment ID: " + segmentID[i]);
//   //         const url = `http://127.0.0.1:8080/api/flights/getSegmentBySegmentID?segmentID=${segments[i]}`;
//   //         console.log(url);
//   //         const response = await fetch(url);
//   //       });
//   //         const data = await response.json();
//   //         segmentDataArr.push(data[0]);
//   //       }
//   //       setSegmentData(segmentDataArr);

//   //     }
//   //       console.log(segmentData); // or do something with the data
//   //     console.log("HERE")
//   //     getSegmentData();

//   //   }, []);
//   //   console.log("184")
//   //   console.log(segmentData);
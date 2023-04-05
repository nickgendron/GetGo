import React, { useState } from "react";
import TextLogo from "../../Images/TextLogo.png";
import FormBackgroundDetails from "../../Images/formBackgroundDetailsPage.png";
import SmallLogo from "../../Images/SmallLogo.png";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "./Details.css";

function Details() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();

  function handleDatesChange({ startDate, endDate }) {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  function handleNavigate(event){
    event.preventDefault();
    navigate("/flights");
  }

  function handleApply(event, picker) {
    const start = picker.startDate.format("MM/DD/YYYY");
    const end = picker.endDate.format("MM/DD/YY");
    const button = document.querySelector(".daterangepicker .applyBtn");
    button.innerHTML = `${start} - ${end}`;
    setStartDate(picker.startDate);
    setEndDate(picker.endDate);
  }
  function renderApplyButton() {
    if (!startDate || !endDate) {
      return (
        <button className="btn btn-primary" disabled>
          Select Dates
        </button>
      );
    }

    const start = startDate.format("MM/DD/YYYY");
    const end = endDate.format("MM/DD/YY");

    return (
      <button className="btn btn-primary">
        {start} - {end}
      </button>
    );
  }

  return (
    <div>
      <div className="topRowIcons">
        <img className="smallLogoStyle" src={SmallLogo} alt="All_work" />
        <img className="textLogoStyle" src={TextLogo} alt="All_work" />
        <div className="buttonDiv">
          <button className="loginButtonDetails"> Log in</button>
          <button className="signUpButtonDetails"> Sign up</button>
        </div>
      </div>
      <br />
      <div className="formFiller">
        <div className="loginForms">
          <h1 className="letsGetGoing">
            <strong>Let's get going!</strong>
          </h1>
          <br />
          <br />
          <input
            className="textFormInputDetails"
            placeholder="Leaving from?"
          ></input>
          <br />
          <br />

          <input
            className="textFormInputDetails"
            placeholder="Where to?"
          ></input>
        </div>
        <div className="calendarDiv">
          <br />
          <br />
          <br />
          <br />
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onApply={handleApply}
          >
            <button className="openCalendarButton">
              {startDate && endDate
                ? `${startDate.format("MM/DD/YYYY")} - ${endDate.format(
                    "MM/DD/YY"
                  )}`
                : "When?"}
            </button>
          </DateRangePicker>
        </div>

        <div className="letsGoDiv">
          <button onClick={handleNavigate} className="letsGoButton">Let's go!</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
//     <div className="container-center-horizontal">
//     <div className="macbook-pro-14-2 screen">
//       <img className="all_work" src={SmallLogo} alt="All_work" />
//       <img className="all_work-1" src={TextLogo} alt="All_work" />
//       <div className="flex-col">
//         <div className="log-in valign-text-middle worksans-bold-swamp-16px">
//           <span>
//             <span className="worksans-bold-swamp-16px">Log in</span>
//           </span>
//         </div>
//         <div className="overlap-group2" style={{ backgroundImage: `url(${FormBackgroundDetails})` }}>
//           <h1 className="lets-get-going valign-text-middle worksans-bold-royal-blue-50px">
//             <span>
//               <span className="worksans-bold-royal-blue-50px">Let's get going!</span>
//             </span>
//           </h1>
//           <div className="overlap-group6">
//             <div className="leaving-from valign-text-middle worksans-bold-swamp-16px">
//               <span>
//                 <span className="worksans-bold-swamp-16px">Leaving from?</span>
//               </span>
//             </div>
//           </div>
//           <div className="overlap-group7">
//             <div className="where-to valign-text-middle worksans-bold-swamp-16px">
//               <span>
//                 <span className="worksans-bold-swamp-16px">Where to?</span>
//               </span>
//             </div>
//           </div>
//           <div className="overlap-group-container">
//             <div className="overlap-group">
//               <div className="place valign-text-middle worksans-bold-swamp-16px">
//                 <span>
//                   <span className="worksans-bold-swamp-16px">Start</span>
//                 </span>
//               </div>
//             </div>
//             <div className="overlap-group">
//               <div className="return valign-text-middle worksans-bold-swamp-16px">
//                   <span></span><button className="worksans-bold-swamp-16px buttonDetails">Return</button>
//               </div>
//             </div>
//           </div>
//           <div className="overlap-group-1">
//             <div className="lets-go valign-text-middle worksans-bold-white-16px">
//               <span>
//                 <span className="worksans-bold-white-16px">Let's go!</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="overlap-group3">
//         <div className="sign-up valign-text-middle worksans-bold-swamp-16px">
//           <span>
//             <span className="worksans-bold-swamp-16px">Sign up</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>

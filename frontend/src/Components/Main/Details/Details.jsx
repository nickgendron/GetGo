import React, { useState, useEffect } from "react";
import TextLogo from "../../Images/TextLogo.png";
import FormBackgroundDetails from "../../Images/formBackgroundDetailsPage.png";
import SmallLogo from "../../Images/SmallLogo.png";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import MainAPI from "../MainAPI/MainAPI";

import "./Details.css";

function Details() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [leavingFrom, setLeavingFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");

  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();

  function handleDatesChange({ startDate, endDate }) {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  function handleNavigate(event) {
    event.preventDefault();

    if (!leavingFrom || !whereTo || !startDate || !endDate) {
      alert("Please fill out all fields");
      return;
    }

    console.log(leavingFrom);
    console.log(whereTo);
    console.log(startDate.format("YYYY-MM-DD"));
    console.log(endDate.format("YYYY-MM-DD"));

   
    return navigate("/mainapi");
  }

  function handleLeavingFromChange(event) {
    setLeavingFrom(event.target.value);

    console.log(leavingFrom);
  }

  function handleWhereToChange(event) {
    for (var i = 0; i < 4; ) {}
    setWhereTo(event.target.value);
  }

  function handleApply(event, picker) {
    const start = picker.startDate.format("YYYY-MM-DD");
    const end = picker.endDate.format("YYYY-MM-DD");
    const button = document.querySelector(".daterangepicker .applyBtn");
    button.innerHTML = `${start} - ${end}`;
    setStartDate(picker.startDate);
    setEndDate(picker.endDate);
    console.log(start);
    console.log(end);

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
            required={true}
            // value={leavingFrom}
            onBlur={(e) => {
              console.log(e.target.value);
              setLeavingFrom(e.target.value);
            }}
          ></input>
          {/* {console.log(leavingFrom)} */}
          <br />
          <br />

          <input
            className="textFormInputDetails"
            placeholder="Where to?"
            onBlur={(e) => {
              console.log(e.target.value);
              setWhereTo(e.target.value);
            }}
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
            required={true}
          >
            <button className="openCalendarButton">
              {startDate && endDate
                ? `${startDate.format("M/D/YYYY")} - ${endDate.format(
                    "MM/DD/YYYY"
                  )}`
                : "When?"}
            </button>
          </DateRangePicker>
        </div>

        <div className="letsGoDiv">
          <button onClick={handleNavigate} className="letsGoButton">
            Let's go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;

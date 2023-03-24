import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

class Hotels extends Component{
  render() {
    return (
      <div>
      <DateRangePicker
        initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
      >
        <button>Vacation Dates?</button>
      </DateRangePicker>
      </div>
    );
  }
}

export default Hotels;
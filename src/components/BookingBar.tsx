import React from 'react';
import AirportSelector from './AirportSelector';
import DateSelector from './DateSelector';
import PassengerSelector from './PassengerSelector';
import '../styles/booking-bar.scss';

function BookingBar() {
  return (
    <form className="booking-bar">
      <div className="airport-wrapper">
        <AirportSelector inputName="origin" label="From" />
        <AirportSelector inputName="destination" label="To" />
      </div>
      <DateSelector />
      <PassengerSelector />
      <button type="submit">Search</button>
    </form>
  );
}

export default BookingBar;

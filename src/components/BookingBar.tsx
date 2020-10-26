import React from 'react';
import AirportSelector from './AirportSelector';
import DateSelector from './DateSelector';
import PassengerSelector from './PassengerSelector';

function BookingBar() {
  return (
    <form className="booking-bar">
      <AirportSelector inputName="origin" label="From" />
      <AirportSelector inputName="destination" label="To" />
      <DateSelector />
      <PassengerSelector />
    </form>
  );
}

export default BookingBar;

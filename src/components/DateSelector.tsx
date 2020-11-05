import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

type focusedInputType = 'startDate' | 'endDate' | null;

function DateSelector() {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<focusedInputType>(null);
  return (
    <div>
      <div className="date-selector">
        <input
          type="text"
          name="departure_date"
          id="departure_date"
          className="date-selector__input"
        />
        <label htmlFor="departure_date">Outbound flight</label>
      </div>
      <div className="date-selector">
        <input
          type="text"
          name="return_flight"
          id="return_flight"
          className="date-selector__input"
        />
        <label htmlFor="return_flight">Return flight</label>
        <DateRangePicker
          startDate={startDate}
          startDateId=""
          endDate={endDate}
          endDateId=""
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput: focusedInputType) =>
            setFocusedInput(focusedInput)
          }
        />
      </div>
    </div>
  );
}

export default DateSelector;

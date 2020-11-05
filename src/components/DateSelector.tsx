import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

type dateType = 'startDate' | 'endDate';

type nullableDateType = dateType | null;

function DateSelector() {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<nullableDateType>(null);
  const [isSingleTrip, setIsSingleTrip] = useState<dateType | boolean>(false);
  return (
    <div>
      <DateRangePicker
        disabled={isSingleTrip}
        startDate={startDate}
        startDateId="departure_date"
        endDate={endDate}
        endDateId="return_date"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput: nullableDateType) =>
          setFocusedInput(focusedInput)
        }
      />
    </div>
  );
}

export default DateSelector;

import React from 'react';
import { getTag } from '../util/labels';
import PassengerInput from './PassengerInput';

function PassengerSelector() {
  return (
    <div className="passenger-selector">
      <div className="passenger-selector__info-box">
        <span className="passenger-selector__passenger-info-label">
          Adult, Children, Infants
        </span>
        <span className="passenger-selector__passenger-number-label">
          1 Passenger
        </span>
      </div>
      <ul className="passenger-selector__input-dropdown">
        <li>
          <PassengerInput
            inputLabel="Adults"
            inputLabelSmall="12+ years"
            inputId="number_adults"
          />
        </li>
        <li>
          <PassengerInput
            inputLabel="Children"
            inputLabelSmall="2-11 years"
            inputId="number_children"
          />
        </li>
        <li>
          <PassengerInput
            inputLabel="Infants"
            inputLabelSmall="0-1 years"
            inputId="number_infants"
          />
        </li>
        <li>
          <button>{getTag('CLOSE_BUTTON')}</button>
        </li>
      </ul>
    </div>
  );
}

export default PassengerSelector;

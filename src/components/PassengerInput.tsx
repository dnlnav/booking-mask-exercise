import React from 'react';

interface PassengerInputPropsType {
  inputId: string;
  inputLabel: string;
  inputLabelSmall: string;
}

function PassengerInput({
  inputId,
  inputLabel,
  inputLabelSmall,
}: PassengerInputPropsType) {
  return (
    <>
      <label htmlFor={inputId}>
        {inputLabel} <small>{inputLabelSmall}</small>
      </label>
      <div className="passenger-selector__input-group">
        <button>-</button>
        <input id={inputId} name={inputId} type="number" />
        <button>+</button>
      </div>
    </>
  );
}

export default PassengerInput;

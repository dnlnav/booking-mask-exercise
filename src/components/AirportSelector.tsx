import React from 'react';

interface airportSelectorProps {
  inputName: string;
  label: string;
}

function AirportSelector({ inputName, label }: airportSelectorProps) {
  return (
    <div className="airport-selector">
      <input
        type="text"
        name={inputName}
        id={inputName}
        className="airport-selector__input"
      />
      <label htmlFor={inputName}>{label}</label>
    </div>
  );
}

export default AirportSelector;

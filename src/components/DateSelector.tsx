import React from 'react';

interface dateSelectorProps {
  inputName: string;
  label: string;
}

function DateSelector({ inputName, label }: dateSelectorProps) {
  return (
    <div>
      <div className="date-selector">
        <input
          type="text"
          name={inputName}
          id={inputName}
          className="date-selector__input"
        />
        <label htmlFor={inputName}>{label}</label>
      </div>
      <div className="date-selector">
        <input
          type="text"
          name={inputName}
          id={inputName}
          className="date-selector__input"
        />
        <label htmlFor={inputName}>{label}</label>
      </div>
    </div>
  );
};

export default DateSelector;

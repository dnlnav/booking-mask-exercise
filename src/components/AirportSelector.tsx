import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchAirportCodes } from '../store/thunks';
import { emptyAirportList, stateType } from '../store/reducers';

interface airportSelectorProps {
  inputName: string;
  label: string;
}

function AirportSelector({ inputName, label }: airportSelectorProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const airportList = useSelector((state: stateType) => state.airportList);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    dispatch(value.length ? searchAirportCodes(value) : emptyAirportList);
  };

  const handleBlur = () => {
    setVisible(false);
    dispatch(emptyAirportList());
  };

  return (
    <div className="airport-selector">
      <input
        type="text"
        name={inputName}
        id={inputName}
        className="airport-selector__input"
        onChange={handleInputChange}
        value={inputValue}
        onFocus={() => setVisible(true)}
        onBlur={handleBlur}
        autoComplete="off"
      />
      <label htmlFor={inputName} className="airport-selector__label">
        {label}
      </label>
      {visible && (
        <ul className="airport-selector__dropdown">
          {airportList.map(([airport, airportCode]: string[]) => (
            <li key={airportCode} className="airport-selector__option">
              {airport} <span>{airportCode}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AirportSelector;

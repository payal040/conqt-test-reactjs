// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ filterName, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter">
      <button onClick={toggleDropdown}>{filterName}</button>
      {isOpen && (
        <div className="dropdown">
          <button onClick={toggleDropdown}>Clear</button>
          <ul>
            {dropdownItems.map((item, index) => (
              <li key={index}>
                {item.label}
                {item.inputType === 'text' && <input type="text" />}
                {item.inputType === 'select' && (
                  <select>
                    {item.options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;

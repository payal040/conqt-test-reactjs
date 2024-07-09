import React from 'react';
import Filter from './Component/Filter';

const App = () => {
  const filterItems = [
    { label: 'Date of registration', inputType: 'text' },
    { label: 'Vendor score', inputType: 'text' },
    { label: 'Rating', inputType: 'text' },
    { label: 'Status', inputType: 'select', options: ['Active', 'Inactive'] },
    { label: 'Type of business', inputType: 'text' },
    { label: 'Location', inputType: 'text' },
    { label: 'Assign to', inputType: 'text' },
  ];

  return (
    <div className="App">
      <h1>Filter Component</h1>
      <Filter filterName="Filters" dropdownItems={filterItems} />
    </div>
  );
};

export default App;

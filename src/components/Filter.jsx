import React from 'react';

const Filter = ({ onFilter }) => {
  return (
    <div>
      <button onClick={() => onFilter('All')}>All</button>
      <button onClick={() => onFilter('electronics')}>Electronics</button>
      <button onClick={() => onFilter('jewelery')}>Jewelry</button>
      <button onClick={() => onFilter('men\'s clothing')}>Men's Clothing</button>
      <button onClick={() => onFilter('women\'s clothing')}>Women's Clothing</button>
    </div>
  );
};

export default Filter;

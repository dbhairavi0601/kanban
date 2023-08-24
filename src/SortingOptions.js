import React from 'react';

const SortingOptions = ({ sortingOption, onSortingChange }) => {
  return (
    <div className="sorting-options">
      <div className="dropdown">
        <button className="dropbtn">Ordering</button>
        <div className="dropdown-content">
          <a onClick={() => onSortingChange('priority')}>Priority</a>
          <a onClick={() => onSortingChange('title')}>Title</a>
        </div>
      </div>
    </div>
  );
};

export default SortingOptions;

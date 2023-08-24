import React from 'react';

const GroupingOptions = ({ groupingOption, onGroupingChange }) => {
  return (
    <div className="grouping-options">
      <div className="dropdown">
        <button className="dropbtn">Grouping</button>
        <div className="dropdown-content">
          <a onClick={() => onGroupingChange('status')}>By Status</a>
          <a onClick={() => onGroupingChange('user')}>By User</a>
          <a onClick={() => onGroupingChange('priority')}>By Priority</a>
        </div>
      </div>
    </div>
  );
};

export default GroupingOptions;

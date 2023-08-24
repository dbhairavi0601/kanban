import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './KanbanBoard';
import apiData from './apiData'; 

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {

    setTickets(apiData.tickets);
  }, []);

  const handleGroupingChange = (option) => {
    setGroupingOption(option);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  return (
    <div className="App">
      <div className="display-options">
        <div className="dropdown">
          <button className="dropbtn">Display</button>
          <div className="dropdown-content">
            <a onClick={() => handleGroupingChange('status')}>Group by Status</a>
            <a onClick={() => handleGroupingChange('user')}>Group by User</a>
            <a onClick={() => handleGroupingChange('priority')}>Group by Priority</a>
            <div className="divider"></div>
            <a onClick={() => handleSortingChange('priority')}>Order by Priority</a>
            <a onClick={() => handleSortingChange('title')}>Order by Title</a>
          </div>
        </div>
      </div>
      <KanbanBoard
        tickets={tickets}
        groupingOption={groupingOption}
        sortingOption={sortingOption}
      />
    </div>
  );
};

export default App;

import React from 'react';
import Ticket from './Ticket';

const KanbanBoard = ({ tickets, groupingOption, sortingOption }) => {
  
  const groupedTickets = groupTicketsByOption(tickets, groupingOption);


  sortTickets(groupedTickets, sortingOption);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="ticket-group">
          <h2>{groupKey}</h2>
          {groupedTickets[groupKey].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

const groupTicketsByOption = (tickets, groupingOption) => {
  const grouped = {};
  tickets.forEach((ticket) => {
    const groupValue =
      groupingOption === 'status'
        ? ticket.status
        : groupingOption === 'user'
        ? ticket.userId
        : ticket.priority.toString(); 
    if (!grouped[groupValue]) {
      grouped[groupValue] = [];
    }
    grouped[groupValue].push(ticket);
  });
  return grouped;
};

const sortTickets = (groupedTickets, sortingOption) => {
  for (const groupKey in groupedTickets) {
    const group = groupedTickets[groupKey];
    if (sortingOption === 'priority') {
      group.sort((a, b) => b.priority - a.priority);
    } else if (sortingOption === 'title') {
      group.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
};

export default KanbanBoard;

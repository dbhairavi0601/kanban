import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h3>{ticket.id}</h3>
      <p>{ticket.title}</p>
    </div>
  );
};

export default Ticket;

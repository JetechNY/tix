import React from "react";
import NewTicket from "./NewTicket";
import Ticket from "./Ticket";

const TicketsList = ({ tickets, setTickets }) => {
  const ticketsArray = tickets.map((ticket) => {
    return <Ticket key={ticket.id} ticket={ticket} />;
  });
  // console.log("in list", tickets);

  return (
    <div>
      <h3>
        "My Tickets List"
      </h3>
      {ticketsArray}
      <br></br>
      <NewTicket />
    </div>
  );
};

export default TicketsList;

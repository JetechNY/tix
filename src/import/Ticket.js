import React from "react";

const Ticket = ({ ticket }) => {
  const {
    id,
    name,
    description,
    assigned_to,
    category,
    sub_category,
    priority,
    create_at,
    update_at,
    complete_at,
    status_id,
  } = ticket;

  return (
    <div>
      <h3>{name}</h3>
      <h5> {description}</h5>
    </div>
  );
};

export default Ticket;

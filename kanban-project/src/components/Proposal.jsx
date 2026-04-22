import React from "react";
import Column from "./Column";
import Card from "./Card";

const Proposal = ({
  openEditModal,
  filteredItems,
  moveCard,
  deleteCard,

}) => {
  return (
    <div>
      <p>Proposal Sent</p>
      <Column id="proposed">
        {filteredItems
          .filter((proposeFilter) => proposeFilter.column === "proposed")
          .map((proposal) => (
            <Card id={proposal.id} key={proposal.id}>
              title: {proposal.title}
              <br />
              <br /> company:
              {proposal.company}
              <br />
              <br /> deal value: {proposal.dealValue}
              <br />
              <br /> priority:
              {proposal.priority} <br />
              <br />
              due date: {proposal.dueDate}
              <br />
              <br /> assignee:
              {proposal.assignee}
              <button
                onClick={() =>
                  moveCard(proposal.id, "closed")
                }
              >
                Move to Closed
              </button>
              <button
                onClick={() =>
                  deleteCard(proposal.id)
                }
              >
                Delete
              </button>
              <button
                onClick={() => {
                  openEditModal(proposal.id);
                }}
              >
                Edit
              </button>
            </Card>
          ))}
      </Column>
    </div>
  );
};

export default Proposal;

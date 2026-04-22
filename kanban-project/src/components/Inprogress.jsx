import React from "react";
import Column from "./Column";
import Card from "./Card";

const Inprogress = ({
  filteredItems,
  deleteCard,
  openEditModal,
  moveCard
}) => {
  return (
    <div>
      <p>In-Progress</p>
      <Column id="inprogress">
        {filteredItems
          .filter((inpro) => inpro.column === "inprogress")
          .map((inprog) => (
            <Card id={inprog.id} key={inprog.id}>
              title: {inprog.title}
              <br />
              <br /> company:
              {inprog.company}
              <br />
              <br /> deal value: {inprog.dealValue} <br />
              <br />
              priority: {inprog.priority}
              <br />
              <br /> due date: {inprog.dueDate} <br />
              <br />
              assignee: {inprog.assignee}
              <button
                onClick={() =>
                  moveCard(inprog.id, "proposed")
                }
              >
                Move to Proposal sent
              </button>
              <button onClick={ () => deleteCard(inprog.id)}>Delete</button>
              <button
                onClick={() => {
                  openEditModal(inprog.id);
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

export default Inprogress;

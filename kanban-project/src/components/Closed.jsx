import React from "react";
import Column from "./column";
import Card from "./card";

const Closed = ({openEditModal, deleteCard, filteredItems, setEditingId}) => {
  return (
    <div>
      <p>Closed Won</p>
      <Column id="closed">
        {filteredItems
          .filter((closedFilter) => closedFilter.column === "closed")
          .map((item) => (
            <Card id={item.id} key={item.id}>
              title: {item.title}
              <br />
              <br /> company:{item.company}
              <br />
              <br /> deal value: {item.dealValue} <br />
              <br />
              priority: {item.priority} <br />
              <br />
              due date: {item.dueDate}
              <br />
              <br /> assignee: {item.assignee}
              <button
                onClick={() => deleteCard(item.id)}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  openEditModal(true);
                  setEditingId(item.id);
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

export default Closed;

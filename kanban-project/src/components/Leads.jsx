import React from "react";
import Column from "./Column";
import Card from "./Card";

const Leads = ({
  filteredItems,
  deleteCard,
  moveCard,
  openEditModal,
}) => {
  return (
    <div>
      <p>Leads</p>
      <Column id="lists">
        {filteredItems
          .filter((item) => item.column === "lists")
          .map((items) => (
            <Card id={items.id} className="items" key={items.id}>
              title: {items.title} <br />
              <br />
              company:{items.company} <br />
              <br />
              deal value: {items.dealValue} <br /> <br /> priority:{" "}
              {items.priority} <br />
              <br /> due date:
              {items.dueDate} <br /> <br /> assignee: {items.assignee} <br />
              <br />
              <button
                onClick={() => {
                     moveCard(items.id, "contact")
                }}
              >
                Move to Contacted
              </button>
              <button
                onClick={() => {
                  deleteCard(items.id)
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  console.log("openEditModal:", openEditModal);
                  openEditModal(items.id);
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

export default Leads;

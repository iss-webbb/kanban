import React from "react";
import Column from "./Column";
import Card from "./Card";

const Contact = ({ filteredItems, deleteCard, moveCard, openEditModal }) => {
  return (
    <div>
      <p>Contacted</p>
      <Column id="contact">
        {filteredItems
          .filter((contacte) => contacte.column === "contact")
          .map((contactMap) => (
            <Card id={contactMap.id} key={contactMap.id}>
              title: {contactMap.title} <br />
              <br /> company:{contactMap.company}
              <br />
              <br /> deal value: {contactMap.dealValue}
              <br />
              <br /> priority: {contactMap.priority}
              <br />
              <br /> due date: {contactMap.dueDate}
              <br />
              <br /> assignee: {contactMap.assignee}
              <button onClick={() => moveCard(contactMap.id, "inprogress")}>
                Move to In-Progress
              </button>
              <button onClick={() => deleteCard(contactMap.id)}>Delete</button>
              <button
                onClick={() => {
                  openEditModal(contactMap.id);
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

export default Contact;

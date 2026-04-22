import React from "react";

const Modal = ({
  formInfo,
  setFormInfo,
  editingId,
  updateCard,
  closeModal,
}) => {
  return (
    <div>
      <div className="modal">
        <div className="inside">
          <p>name</p>
          <input
            type="text"
            value={formInfo.name}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />

          <p>Title</p>
          <input
            type="text"
            value={formInfo.title}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, title: e.target.value }))
            }
          />

          <p>Company</p>
          <input
            type="text"
            value={formInfo.company}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, company: e.target.value }))
            }
          />

          <p>dealValue</p>
          <input
            type="number"
            value={formInfo.dealValue}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, dealValue: e.target.value }))
            }
          />

          <select
            value={formInfo.priority}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, priority: e.target.value }))
            }
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
          </select>

          <p>Due Date</p>
          <input
            type="number"
            value={formInfo.dueDate}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, dueDate: e.target.value }))
            }
          />

          <p>Assignee</p>
          <input
            type="text"
            value={formInfo.assignee}
            onChange={(e) =>
              setFormInfo((prev) => ({ ...prev, assignee: e.target.value }))
            }
          />

          <button
            onClick={() => {
              updateCard(editingId);
            }}
          >
            Submit
          </button>
          <button onClick={() => closeModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

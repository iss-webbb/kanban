import React from "react";
import { DndContext } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";

function Card({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <li ref={setNodeRef} style={style}>
      <div
        {...attributes}
        {...listeners}
        style={{ cursor: "grab", touchAction: "none" }}
      >
        {" "}
        <button className="drag"></button>{" "}
      </div>
      {children}
    </li>
  );
}

export default Card;

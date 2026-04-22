import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Column({ id, children }) {
  const { setNodeRef } = useDroppable({ id });
  return <ul ref={setNodeRef}>{children}</ul>;
}

export default Column;

import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableListItem = ({ id, index, moveItem, text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return (
   `rgb(${r}, ${g}, ${b})`
)};


  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        height: "50px",
        padding: "8px",
        border: "1px solid black",
        marginBottom: "4px",
        cursor: "move",
        backgroundColor:  getRandomRGB(),
        opacity: isDragging ? 0.5 : 1,
        boxShadow: isDragging ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      {text}
    </div>
  );
};

export default DraggableListItem;

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableList from "./DragDrop";

const DnsWrapper = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ margin: "20px" }}>
        <h2>Drag and Drop List</h2>
        <DraggableList />
      </div>{" "}
    </DndProvider>
  );
};

export default DnsWrapper;

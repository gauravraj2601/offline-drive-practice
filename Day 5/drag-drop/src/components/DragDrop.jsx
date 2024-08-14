// src/DraggableList.js
import React, { useState } from 'react';
import DraggableListItem from './DraggableList';

const DraggableList = () => {
    const [items, setItems] = useState([
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
        { id: 4, content: 'Item 4' },
        { id: 5, content: 'Item 5' },
        { id: 6, content: 'Item 6' },
        { id: 7, content: 'Item 7' },
      ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <DraggableListItem
          key={item.id}
          id={item.id}
          index={index}
          text={item.content}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

export default DraggableList;

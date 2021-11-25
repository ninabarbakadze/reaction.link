import React from 'react';
import { useDrag } from 'react-dnd';
import '../App.css';


const DraggableObject = () => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'input',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }));

  return (
    <div className="draggable-obj-parent">
      <span className="draggable-object">
        <p ref={drag}>Input field</p>
      </span>
    </div>
  );
};

export default DraggableObject;

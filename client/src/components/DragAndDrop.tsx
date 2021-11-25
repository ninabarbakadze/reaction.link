import React, { useState } from 'react';
import DraggableObject from './DraggableObject';
import { useDrop } from 'react-dnd';


const DragAndDrop = () => {
  return (
    <div>
      <div className="input"> 
      </div>
      <div className="board">
        <DraggableObject />
      </div>
    </div>
  );
};

export default DragAndDrop;

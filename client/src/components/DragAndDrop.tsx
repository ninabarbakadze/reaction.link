import React, { useState } from 'react';
import DraggableObject from './DraggableObject';
import { useDrop } from 'react-dnd';
import { Iinput } from '../interfaces/event.interface';
import InputFieldOnDrop from './InputFieldOnDrop';


const DragAndDrop = () => {
  const [inputFields, setInputField] = useState<Iinput[]>([]);
  const [{isOver}, drop] = useDrop(() => ({ 
    accept: 'input',
    drop: () =>  setInputField((inputFields) => [...inputFields, {event: ''}]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div>
      <div className="input"> 
        <DraggableObject />
      </div>
      <div className="board" ref={drop}>
        <InputFieldOnDrop inputFields={inputFields} setInputField={setInputField}/>
      </div>
    </div>
  );
};

export default DragAndDrop;

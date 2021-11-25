import React from 'react';
import logo from './logo.svg';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragAndDrop from './components/DragAndDrop';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragAndDrop />
      </div>
    </DndProvider>
  );
}

export default App;

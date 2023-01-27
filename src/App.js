import './App.css';
import Heading from './components/Heading.js';
import Gameboard from './components/Gameboard.js';
import React from 'react'
import { useState } from 'react';

export const EdgeContext = React.createContext()

function App() {

  const [getSize, setSize] = useState(2);
  const [edges, setEdges] = useState([]);

  return (
    <EdgeContext.Provider value={{edges, setEdges}}>
      <div className="body">
        <div className="gamecontainer">
          <Heading size={getSize} setSize={setSize}></Heading>
          <Gameboard size={getSize} edges={edges} setEdges={setEdges}></Gameboard>
          <div>{edges}</div>
        </div>
      </div>
    </EdgeContext.Provider>
  );
}

export default App;

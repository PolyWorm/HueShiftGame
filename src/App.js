import './App.css';
import Heading from './components/Heading.js';
import Gameboard from './components/Gameboard.js';
import Scrambleboard from './components/Scrambleboard';
import React from 'react'
import { useState } from 'react';

export const EdgeContext = React.createContext()
export const TimerContext = React.createContext()

function App() {

  const [getSize, setSize] = useState(1);
  const [edges, setEdges] = useState([]);
  const [isActive, setIsActive] = useState(false)
  const [isScrambled, setScrambled] = useState(false)
  const [isSolved, setIsSolved] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)

  return (
    <EdgeContext.Provider value={{edges, setEdges}}>
      <TimerContext.Provider value={{isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved}}>
        <div className="body">
          <div className="gamecontainer">
            <Heading size={getSize} setSize={setSize}></Heading>
            <Gameboard size={getSize} edges={edges} setEdges={setEdges}></Gameboard>
          </div>
        </div>
      </TimerContext.Provider>
    </EdgeContext.Provider>
  );
}

export default App;

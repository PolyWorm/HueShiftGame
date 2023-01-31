import './App.css';
import Heading from './components/Heading.js';
import Gameboard from './components/Gameboard.js';
import React from 'react'
import { useState } from 'react';

export const EdgeContext = React.createContext()
export const TimerContext = React.createContext()

function App() {

  const [getSize, setSize] = useState(2);
  const [edges, setEdges] = useState([]);
  const [isActive, setIsActive] = useState(false)
  const [isScrambled, setScrambled] = useState(false)
  const [isSolved, setIsSolved] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)
  const [bestTime, setBestTime] = useState(localStorage.getItem('hs1'));
  const [bestTime2, setBestTime2] = useState(localStorage.getItem('hs2'));
  const [bestTime3, setBestTime3] = useState(localStorage.getItem('hs3'));

  return (
    <EdgeContext.Provider value={{edges, setEdges}}>
      <TimerContext.Provider value={{isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved, bestTime, bestTime2, bestTime3, setBestTime, setBestTime2, setBestTime3}}>
        <div className="body">
          <div className="gamecontainer">
            <Heading size={getSize} setSize={setSize}>
            </Heading>
            <Gameboard size={getSize} edges={edges} setEdges={setEdges}  
              setBestTime={setBestTime} setBestTime2={setBestTime2} setBestTime3={setBestTime3} ></Gameboard>
            <div className="foot">
              <p className="instructions"><strong className="boldletters">instructions:</strong> click the squares to rotate the edges and move the edges to the correct spots.</p>
              <p className="madeby">made by justin li.</p>
            </div>
          </div>
        </div>
      </TimerContext.Provider>
    </EdgeContext.Provider>
  );
}

export default App;

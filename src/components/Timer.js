import './Timer.css';
import React, { useContext, useEffect } from 'react';
import { TimerContext, EdgeContext } from '../App.js';
import solvedState from '../hooks/useSolvedState.js';


function Timer(props) {
  let {isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved} = useContext(TimerContext);
  let {edges, setEdges} = useContext(EdgeContext);
  
  useEffect(() => {
    let interval = null;
  
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);
  return (
    <div className="Timer">
        <h4 className="timertext">time</h4>
        <h2 className="time">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10) % 100)).slice(-2)}</h2>
    </div>
  );
}

export default Timer;

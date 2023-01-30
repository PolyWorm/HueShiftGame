import './Button.css';
import React, { useContext } from 'react';
import { TimerContext } from '../App.js';

function Button(props) {
  let setSize = props.setSize
  let {isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved, bestTime, bestTime2, bestTime3,} = useContext(TimerContext);
  let size = props.size
  
  return (
    <div className="button" onClick={() => { 
      setSize(size)
      setScrambled(false); 
      setIsActive(false);
      setTime(0);
      setIsSolved(false);
      }} >
        <h2 className="text">{props.size}x{props.size}</h2>
    </div>
  );
}

export default Button;

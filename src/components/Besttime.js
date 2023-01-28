import './Timer.css';
import React, { useContext, useState } from 'react';
import { TimerContext, EdgeContext } from '../App.js';

function Besttime(props) {
  let {isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved, bestTime, bestTime2, bestTime3,} = useContext(TimerContext);

  let size = props.size
  let text = ""
  if (size == 2) {
    if (bestTime === null){
      text = "--:--"
    }
    else {
      text = (("0" + Math.floor(( localStorage.getItem('hs1')/ 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((localStorage.getItem('hs1') / 1000) % 60)).slice(-2))
    }
  }
  if (size == 3) {
    if (bestTime2 === null){
      text = "--:--"
    }
    else {
      text = (("0" + Math.floor(( localStorage.getItem('hs2')/ 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((localStorage.getItem('hs2') / 1000) % 60)).slice(-2))
    }
  }
  if (size == 4) {
    if (bestTime3 === null){
      text = "--:--"
    }
    else {
      text = (("0" + Math.floor(( localStorage.getItem('hs3')/ 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((localStorage.getItem('hs3') / 1000) % 60)).slice(-2))
    }
  }
  return (
    <div className="Timer">
        <h4 className="timertext">best</h4>
        <h2 className="time">{text}</h2>
    </div>
  );
}

export default Besttime;

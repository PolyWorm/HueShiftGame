import './Timer.css';
import React from 'react'

function Timer(props) {
  return (
    <div className="Timer">
        <h4 className="timertext">time</h4>
        <h2 className="time">{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:{("0" + ((props.time / 10) % 100)).slice(-2)}</h2>
    </div>
  );
}

export default Timer;

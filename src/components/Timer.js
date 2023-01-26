import './Timer.css';
import React from 'react'

function Timer(props) {
  return (
    <div className="Timer">
        <h4 className="timertext">time</h4>
        <h2 className="time">{props.time}s</h2>
    </div>
  );
}

export default Timer;

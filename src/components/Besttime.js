import './Timer.css';
import React from 'react'

function Besttime(props) {
  if (localStorage.getItem("highscore2x2") === null) {
    localStorage.setItem('highscore2x2', '0');
  }
  if (localStorage.getItem("highscore3x3") === null) {
    localStorage.setItem('highscore3x3', '0');
  }
  if (localStorage.getItem("highscore4x4") === null) {
    localStorage.setItem('highscore4x4', '0');
  }
  if (localStorage.getItem("highscore5x5") === null) {
    localStorage.setItem('highscore4x4', '0');
  }
  return (
    <div className="Timer">
        <h4 className="timertext">best</h4>
        <h2 className="time">0:00</h2>
    </div>
  );
}

export default Besttime;

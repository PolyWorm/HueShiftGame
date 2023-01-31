import './Reset.css';
import React, { useState, useEffect, useContext } from 'react';
import { EdgeContext } from '../App.js';
import { TimerContext } from '../App.js';
import { fullScramble } from '../hooks/useFullScramble.js';

function Reset(props) {
    let {edges, setEdges} = useContext(EdgeContext);
    let {isActive, isScrambled, setScrambled, setIsActive, time, setTime} = useContext(TimerContext);
    let size = props.size;
    return (
      <button onClick={() => {fullScramble(edges, setEdges, props.size); setScrambled(true); setIsActive(true); setTime(0)}} className="reset">
        <h2 className="text2">new game</h2>
      </button>
     );
  }

export default Reset;

import './Scrambleboard.css';
import React, { useContext } from 'react';
import { EdgeContext } from '../App.js';
import { TimerContext } from '../App.js';
import { fullScramble } from '../hooks/useFullScramble.js';

function Scrambleboard(props) {
    let {edges, setEdges} = useContext(EdgeContext);
    let {isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved} = useContext(TimerContext);
    let size = props.size;
    let opacitized = { opacity: "80%", 
        transition: "opacity 0.2s ease-out 100ms"};
    if (isSolved) {
        opacitized = { opacity: "0%", 
        transition: "opacity 0.2s ease-out 100ms"};
    }
    let textstyle = {
        display: "block"
    }
    if (isScrambled) {
        opacitized = { opacity: "0%", 
        width: "0%",
        transition: "opacity 0.2s ease-out 100ms, width 0.3s ease-out 100ms"};
        textstyle = {
            display: "none"
        }
    }
    return (
        
        <div 
            style={opacitized} 
            onClick={() => { 
            fullScramble(edges, setEdges, props.size); 
            setScrambled(true); 
            setIsActive(true);
            setIsSolved(false);
            setTime(0);
            }} 
            className="scramble"
        >
            <h2 style={textstyle} className="text3">start</h2>
        </div>
    );      
  }

export default Scrambleboard;

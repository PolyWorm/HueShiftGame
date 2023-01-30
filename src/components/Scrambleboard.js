import './Scrambleboard.css';
import React, { useContext } from 'react';
import { EdgeContext } from '../App.js';
import { TimerContext } from '../App.js';
import { fullScramble } from '../hooks/useFullScramble.js';

function Scrambleboard(props) {
    let {edges, setEdges} = useContext(EdgeContext);
    let {isActive, isScrambled, setScrambled, setIsActive, time, setTime, isSolved, setIsSolved, bestTime, bestTime2, bestTime3,} = useContext(TimerContext);
    let size = props.size;
    let highscore = 0
    switch (size) {
        case 2:
            highscore = bestTime
            break
        case 3:
            highscore = bestTime2
            break
        case 4:
            highscore = bestTime3
            break
      }
      

    let opacitized = { opacity: "0%", 
        width: "0%",
        transition: "opacity 0.2s ease-out 100ms, width 0.3s ease-out 100ms"};
    let textstyle = {
        display: "none"
    }

    if (!isScrambled) {
        if (isSolved) {
            opacitized = { opacity: "80%", 
            transition: "opacity 0.2s ease-out 100ms"}
            textstyle = {
                display: "flex"
            }
            if (time == highscore) {
                opacitized = { 
                    opacity: "80%", 
                    backdropFilter: "blur(30px) invert(70%)",
                    transition: "opacity 0.2s ease-out 100ms"
                  };
                  
                return (
                    <div 
                        style={opacitized} 
                        className="scramble">
                        <h4 className="headingtext">{"new high score!"}</h4>
                        <h2 className="timetext">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</h2>
                        <button 
                        onClick={() => { 
                            fullScramble(edges, setEdges, props.size); 
                            setScrambled(true); 
                            setIsActive(true);
                            setIsSolved(false);
                            setTime(0);
                            }} 
                        style={textstyle} className="text4">start</button>
                        
                    </div>
                ); 
            } else {
                return (
                    <div 
                        style={opacitized} 
                        className="scramble">
                        <h4 className="headingtext">{"here's your time!"}</h4>
                        <h2 className="timetext">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</h2>
                        <h4 className="headingtext">{"best time"}</h4>
                        <h2 className="besttimetext">{("0" + Math.floor((highscore / 60000) % 60)).slice(-2)}:{("0" + Math.floor((highscore / 1000) % 60)).slice(-2)}</h2>
                        
                        <button 
                        onClick={() => { 
                            fullScramble(edges, setEdges, props.size); 
                            setScrambled(true); 
                            setIsActive(true);
                            setIsSolved(false);
                            setTime(0);
                            }} 
                        style={textstyle} className="text4">start</button>
                        
                    </div>
                ); 
            }  
        } else {
            opacitized = { opacity: "80%", 
            transition: "opacity 0.2s ease-out 100ms"}
            textstyle = {
                display: "flex"
            }
        } 
    }


    return (
        
        <div 
            style={opacitized} 
            className="scramble">
            <button 
            onClick={() => { 
                fullScramble(edges, setEdges, props.size); 
                setScrambled(true); 
                setIsActive(true);
                setIsSolved(false);
                setTime(0);
                }} 
            style={textstyle} className="text3">start</button>
            
        </div>
    );      
  }

export default Scrambleboard;

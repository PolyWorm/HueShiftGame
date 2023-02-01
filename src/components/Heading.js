import './Heading.css';
import Timer from './Timer.js'
import React from 'react'
import Besttime from './Besttime.js';
import Button from './Button.js';
import Reset from './Reset.js';
import { useState, useContext } from 'react';
import { TimerContext } from '../App.js';

function Heading(props) {


    let {isActive, isScrambled, setScrambled, setIsActive, time, setTime} = useContext(TimerContext);
    const [bestTime, setBestTime] = useState(localStorage.getItem('hs1'));
    const [bestTime2, setBestTime2] = useState(localStorage.getItem('hs2'));
    const [bestTime3, setBestTime3] = useState(localStorage.getItem('hs3'));
    const setSize = props.setSize
    const size = props.size

    return (
        <header>
            <div className="heading">
                <div className="logocontainer">
                    <div className="logo"/>
                </div>
                <Besttime size={size} bestTime={bestTime} setBestTime={setBestTime}
                     bestTime2={bestTime2} setBestTime2={setBestTime2}
                     bestTime3={bestTime3} setBestTime3={setBestTime3}></Besttime>
                <Timer time={time}></Timer>
            </div>
            <div className="controlbar">
                <Button setSize={setSize} size={2} otherSize={size} edges={props.edges}></Button>
                <Button setSize={setSize} size={3} otherSize={size} edges={props.edges}></Button>
                <Button setSize={setSize} size={4} otherSize={size} edges={props.edges}></Button>
                <Reset size={size}></Reset>
            </div>
        </header>
    );
}

export default Heading;

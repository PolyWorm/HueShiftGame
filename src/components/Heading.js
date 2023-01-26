import './Heading.css';
import Timer from './Timer.js'
import React from 'react'
import Besttime from './Besttime.js';
import Button from './Button.js';
import Reset from './Reset.js';
import { useState } from 'react';

function Heading(props) {

    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(0.00)
    const setSize = props.setSize
    const size = props.size

    return (
        <header>
            <div className="heading">
                <div className="logocontainer">
                    <div className="logo"/>
                    <h1 className="h1">hueshift.io</h1>
                </div>
                <Besttime></Besttime>
                <Timer time={time}></Timer>
            </div>
            <div className="controlbar">
                <Button setSize={setSize} size={3} edges={props.edges}></Button>
                <Button setSize={setSize} size={4} edges={props.edges}></Button>
                <Button setSize={setSize} size={5} edges={props.edges}></Button>
                <Reset size={size}></Reset>
            </div>
        </header>
    );
}

export default Heading;

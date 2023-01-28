import './Gameboard.css';
import React from 'react'
import Gamebutton from './Gamebutton.js';
import Edges from './Edges';
import Nubs from './Nubs.js';
import Scrambleboard from './Scrambleboard.js';
import { useState, useEffect, useContext} from 'react';
import {EdgeContext} from '../App.js'
import useWindowDimensions from '../hooks/useWindowDimensions.js';

function Gameboard(props) {
    const { height, width } = useWindowDimensions();
    let gameboardsize = 0
    if (width < 520) {
        gameboardsize = 280
    }
    else {
        gameboardsize = 500
    }
    const size = props.size
    const edgeweight = (1/((props.size * 9) + 1)) * gameboardsize;
    const marginofbutton = edgeweight / 2;
    const { edges, setEdges } = useContext(EdgeContext);
    let edgenumber = (props.size*(props.size+1) * 2)
    let buttons = []
    let edge = []

    //pushing buttons into an array to keep track of
    for (let i = 0; i < size*size; i++) {
        buttons.push(i)
    }
    //pushing edges onto arrays
    for (let i = 0; i < edgenumber; i ++) {
        edge.push(i)
    }
    useEffect(() => {
        setEdges(edge);
      }, [size])
    let buttongridsize = gameboardsize - edgeweight
    let sizing = {width: buttongridsize,
        height: buttongridsize,
        "margin-top": marginofbutton+"px" }



    return (
        <div className="gameboard">
            <Scrambleboard size={size}></Scrambleboard>
            <div className="nubs">
                <Nubs size={size}></Nubs>
            </div>
            <div className="buttongrid" style={sizing}>
                <Gamebutton size={size}></Gamebutton>
            </div>
            <div className="edges">
                <Edges size={size} edges={edges} setEdges={setEdges}></Edges>
            </div>
        </div>
  );
}

export default Gameboard;

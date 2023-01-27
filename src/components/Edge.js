import './Edge.css';
import { useEffect, useState, useContext } from 'react';
import React from 'react'
import {EdgeContext} from '../App.js'
import useWindowDimensions from '../hooks/useWindowDimensions.js';

function Edge(props) {
    const { height, width } = useWindowDimensions();
    let gameboardsize = 0
    if (width < 520) {
        gameboardsize = 280
    }
    else {
        gameboardsize = 500
    }
    
    const size = props.size
    const { edges, setEdges } = useContext(EdgeContext);
    const colorproperty = edges[props.indexof] % 3
    const indexof = props.indexof
    const width2 = (1/((props.size * 9) + 1)) * gameboardsize;
    const length = gameboardsize / size;
    let style1 = {
        width: length+"px",
        height: width2+"px"
    }
    let style2 = {}

    if (props.position == "horizontal") {
        style1 = {       
            width: length+"px",
            height: width2+"px"
        }
    }
    else if (props.position == "vertical") {
        style1 = {       
            width: width2+"px",
            height: length+"px"
        }
    }

    if (colorproperty == 0) {
        style2 = {"background-color": "#FFEB2E"}
        return (
            <div style={{...style1}} className="yellowedge">
            </div>
        );
    }
    if (colorproperty == 1) {
        style2 = {"background-color": "#45FBF3", "box-shadow": "0 0 10px #FFEB2E;"}
        return (
            <div style={{...style1}} className="blueedge">
            </div>
        );
    }
    if (colorproperty == 2) {
        style2 = {"background-color": "#FF84CB", "box-shadow": "0 0 10px #FFEB2E;"}
        return (
            <div style={{...style1}} className="rededge">
            </div>
        );
    }
    function recolor () {
        let colorprop = props.edges[props.indexof] % 3
        if (colorprop == 0) {
            style2 = {"background-color": "#FFEB2E"}
        }
        if (colorprop == 1) {
            style2 = {"background-color": "#45FBF3"}
        }
        if (colorprop == 2) {
            style2 = {"background-color": "#FF84CB"}
        }

    }
    return (
        <div style={{...style1, ...style2}} className="edge">
            {edges[indexof]}
        </div>
    );
    
}

export default Edge;

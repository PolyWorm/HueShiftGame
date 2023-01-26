import './Edge.css';
import { useEffect, useState, useContext } from 'react';
import React from 'react'
import {EdgeContext} from '../App.js'


function Edge(props) {
    
    const size = props.size
    const { edges, setEdges } = useContext(EdgeContext);
    const colorproperty = edges[props.indexof] % 3
    const indexof = props.indexof
    const width = (1/((props.size * 9) + 1)) * 500;
    const length = 500 / size;
    let style1 = {
        width: length+"px",
        height: width+"px"
    }
    let style2 = {}

    if (props.position == "horizontal") {
        style1 = {       
            width: length+"px",
            height: width+"px"
        }
    }
    else if (props.position == "vertical") {
        style1 = {       
            width: width+"px",
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

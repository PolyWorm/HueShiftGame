import './Edges.css';
import Edge from './Edge.js';
import React from 'react'
import {EdgeContext} from '../App.js'
import {useContext} from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions.js';

function Edges(props) {
    const { height, width } = useWindowDimensions();
    let gameboardsize = 0
    if (width < 520) {
        gameboardsize = 280
    }
    else {
        gameboardsize = 500
    }
    //equation for finding the width of the edges.
    const { edges, setEdges } = useContext(EdgeContext);
    let edgecount = edges.length
    let size = props.size
    let count = size
    const width2 = (1/((props.size * 9) + 1)) * gameboardsize;
    const length = gameboardsize / props.size;
    let horizontaledges = []
    let verticaledges = []

    //horizontal
    for (let i = 0; i < edgecount; i += (size + size + 1)) {
        //horizontal
        let tempedges = []
        for (let j = i; j < count; j++){
            tempedges.push(<Edge position={"horizontal"} indexof={j}size={props.size}></Edge>)
        }
        horizontaledges.push(<div className="horizontalrow"> 
            {tempedges}
        </div>)
        //vertical
        tempedges = []
        if (count >= edgecount) {
            break
        }
        for (let j = count; j < (count + size + 1); j++){
            tempedges.push(<Edge position={"vertical"} indexof={j} size={props.size}></Edge>)
        }
        verticaledges.push(<div className="verticalcolumn"> 
            {tempedges}
        </div>)
        count += size + size + 1
    }

    return (
        <div className="test">
            <div className="horizontal">{horizontaledges}</div>
            <div className="vertical">{verticaledges}</div>
        </div>
    );
}

export default Edges;

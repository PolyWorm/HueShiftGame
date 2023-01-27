
import React from 'react'
import './Backgroundfade.css';
import {EdgeContext} from '../App.js'
import {useContext} from 'react'

function Backgroundfade(props) {
    let bgcolorsize = props.styleguide;
    const { edges, setEdges } = useContext(EdgeContext);
    let number = props.number;
    let opacitized = { opacity: "0%", 
    transition: "opacity 0.3s ease-out 100ms"};
    if (number % 3 == edges[number] % 3) {
        opacitized = { opacity: "80%", 
        transition: "opacity 0.3s ease-out 100ms"};
    }
    return (
        <div style={{...bgcolorsize, ...opacitized}} className={props.position}></div>
    );
}
export default Backgroundfade;

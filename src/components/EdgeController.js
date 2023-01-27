import './EdgeController.css';
import React from 'react'
import {EdgeContext} from '../App.js'
import {useContext, useState} from 'react'

function EdgeController(props) {
    
    let size = props.size
    let style = props.styleguide
    let backgroundsegments = []
    const { edges, setEdges } = useContext(EdgeContext);

    const number = props.number
    function edgefinder(input) {
        let rownumber = Math.floor(input/size)
        let fullrownumber = (size * 2) + 1
        let remainder = (input % size) + 1
        let startingpoint = (rownumber * fullrownumber + remainder)
        return [startingpoint - 1, startingpoint + size + 1 - 1, startingpoint + size + size + 1 - 1, startingpoint + size - 1]
    }
    //gives values of edges in array
    function edgevalues(edgearray) {
        let tempedges = []
        for (let i = 0; i < edgearray.length; i++) {
            tempedges.push(edges[edgearray[i]])
        }
        return tempedges
    }

    let indexofEdges = edgefinder(number)
    //current edge values
    const [controllededges, setcontrollededges] = useState(edgevalues(indexofEdges))
    //sets edges to the next edge
    function switchEdges(iofE) {
        let tempedges = [] 
        let tempnewedges = [...edges];
        tempedges.push(edges[iofE[iofE.length - 1]])
        for (let i = 0; i < iofE.length - 1; i++){
            tempedges.push(edges[iofE[i]])
        }
        setcontrollededges(tempedges)
        for (let i = 0; i < iofE.length; i++){
            tempnewedges[iofE[i]] = tempedges[i]
        }
        setEdges(tempnewedges)
    }
    function animateEdge() {
        let tempbackgrounds = []

        let colors = edgevalues(indexofEdges)
        for (let i = 0; i < 4; i+= 1) {
            let color = colors[i] % 3
            let position = "top"
            if (i == 0) {
                position = "up"
            }
            else if (i == 1) {
                position = "right"
            }
            else if (i == 2) {
                position = "down"
            }
            else if (i == 3) {
                position = "left"
            }
            if (color == 0) {
                tempbackgrounds.push("yellow " + position)
            }
            else if (color == 1) {
                tempbackgrounds.push("blue " + position)
            }
            else if (color == 2) {
                tempbackgrounds.push("red " + position)
            }
        }
        backgroundsegments = tempbackgrounds
    }
    animateEdge()
    return (
      <div className="inner" onClick={()=>switchEdges(indexofEdges)} style={style}>
        <div key={controllededges[0]} className={`${backgroundsegments[0]}`}></div>
        <div key={controllededges[1]} className={`${backgroundsegments[1]}`}></div>
        <div key={controllededges[2]} className={`${backgroundsegments[2]}`}></div>
        <div key={controllededges[3]} className={`${backgroundsegments[3]}`}></div>
      </div>
    );
  }

export default EdgeController
import './EdgeController.css';
import React from 'react'
import {EdgeContext} from '../App.js'
import {useContext} from 'react'

function EdgeController(props) {
    
    let size = props.size
    let style = props.styleguide
    const { edges, setEdges } = useContext(EdgeContext);
    const number = props.number
    function edgefinder(input) {
        let rownumber = Math.floor(input/size)
        let fullrownumber = (size * 2) + 1
        let remainder = (input % size) + 1
        let startingpoint = (rownumber * fullrownumber + remainder)
        return [startingpoint - 1, startingpoint + size + 1 - 1, startingpoint + size + size + 1 - 1, startingpoint + size - 1]
    }

    let indexofEdges = edgefinder(number)

    //sets edges to the next edge
    function switchEdges(iofE) {
        let tempedges = [] 
        let tempnewedges = [...edges];
        tempedges.push(edges[iofE[iofE.length - 1]])
        for (let i = 0; i < iofE.length - 1; i++){
            tempedges.push(edges[iofE[i]])
        }
        
        for (let i = 0; i < iofE.length; i++){
            tempnewedges[iofE[i]] = tempedges[i]
        }
        setEdges(tempnewedges)
    }

    return (
      <div onClick={()=>switchEdges(indexofEdges)} className="inner" style={style}>
      </div>
    );
  }

export default EdgeController
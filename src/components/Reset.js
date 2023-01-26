import './Reset.css';
import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {EdgeContext} from '../App.js'

function Reset(props) {
  let {edges, setEdges} = useContext(EdgeContext)
  let size = props.size
  let edgenumber = size * size
  let [reset, setReset] = useState(false)

  function edgefinder(input) {
    let rownumber = Math.floor(input/size)
    let fullrownumber = (size * 2) + 1
    let remainder = (input % size) + 1
    let startingpoint = (rownumber * fullrownumber + remainder)
    return [startingpoint - 1, startingpoint + size + 1 - 1, startingpoint + size + size + 1 - 1, startingpoint + size - 1]
  }

  function switchEdges(iofE, tempnewedges) {
      let tempedges = [] 
      let newedges = [...tempnewedges]
      tempedges.push(tempnewedges[iofE[iofE.length - 1]])
      for (let i = 0; i < iofE.length - 1; i++){
          tempedges.push(tempnewedges[iofE[i]])
      }
      
      for (let j = 0; j < iofE.length; j++){
        newedges[iofE[j]] = tempedges[j]
      }
      return newedges
  }


  function fullScramble() {
      let tempnewedges = [...edges];
      // set interval
      for (let i = 0; i < 50; i++) {
        let randomButtonNumber = Math.floor(Math.random() * edgenumber);
        let randomiofE = edgefinder(randomButtonNumber);
        let z = switchEdges(randomiofE, tempnewedges);
        tempnewedges = [...z]
      }

      setEdges(tempnewedges);
  }


  return (
  <div onClick={() => fullScramble()} className="reset">
    <h2 className="text2">scramble</h2>
  </div>
  );
}

export default Reset;

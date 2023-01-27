import './Reset.css';
import React, { useState, useEffect, useContext } from 'react';
import { EdgeContext } from '../App.js';
import { fullScramble } from '../hooks/useFullScramble.js';

function Reset(props) {
    let {edges, setEdges} = useContext(EdgeContext);
    let size = props.size;
    return (
      <div onClick={() => fullScramble(edges, setEdges, props.size)} className="reset">
        <h2 className="text2">new game</h2>
      </div>
     );
  }

export default Reset;

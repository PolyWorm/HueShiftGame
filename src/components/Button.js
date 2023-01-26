import './Button.css';
import React from 'react'

function Button(props) {
  let setSize = props.setSize
  let size = props.size
  return (
    <div className="button" onClick={()=>setSize(size)}>
        <h2 className="text">{props.size}x{props.size}</h2>
    </div>
  );
}

export default Button;

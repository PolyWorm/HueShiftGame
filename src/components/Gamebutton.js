import './Gamebutton.css';
import EdgeController from './EdgeController.js';
import React from 'react'
import {EdgeContext} from '../App.js'
import {useContext} from 'react'


function Gamebutton(props) {
    //equation for finding the width of the button.

    
    const size = props.size
    const { edges, setEdges } = useContext(EdgeContext);
    const length = (6/((props.size * 9) + 1)) * 500;
    //inner square size
    const innerlength = length * (2/3)


    function edgefinder(input) {
        let rownumber = Math.floor(input/size)
        let fullrownumber = (size * 2) + 1
        let remainder = (input % size) + 1
        let startingpoint = (rownumber * fullrownumber + remainder)
        return [startingpoint, startingpoint + size + 1, startingpoint + size + size + 1, startingpoint + size]
    }
    function rotater(i, color) {
        switch (i) {
            case 0:
                return (<div style={styles} className={color+'top'}></div>)
            case 1:
                return (<div style={styles} className={color+'right'}></div>)
            case 2:
                return (<div style={styles} className={color+'bottom'}></div>)
            case 3:
                return (<div style={styles} className={color+'left'}></div>)
            default:
              console.log('something went amiss');
          }
    }
    function colorpicker(i) {
        let choice = i % 3
        switch (choice) {
            case 0:
                return 'red'
            case 1:
                return 'yellow'
            case 2:
                return 'blue'
            default:
              console.log('something went amiss');
          }
    }
    const styles = {
        width: length+"px",
        height: length+"px",
    }
    const innersquare = {
        width: innerlength+"px",
        height: innerlength+"px",
    }
    let buttons = []
    let count = 0
    for (let i = 0; i < size; i++) {
        let buttonrow = []
        for (let j = 0; j < size; j++) {
            let edgesOfCurrentButton = edgefinder(count)
            let corners = []
            corners.push(<EdgeController size={size} number={count}styleguide={innersquare}></EdgeController>)
            for (let k = 0; k < edgesOfCurrentButton.length; k++) {
                let col = colorpicker(edgesOfCurrentButton[k])
                corners.push(rotater(k, col))
            }
            buttonrow.push(<div className="gamebutton" style={styles}>{corners}</div>)
            count += 1
        }
        buttons.push(
          <div className="buttonrow"> 
              {buttonrow}
          </div>
        );
      }

    return (
        buttons
    );
}

export default Gamebutton;

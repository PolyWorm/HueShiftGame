import './Gamebutton.css';
import EdgeController from './EdgeController.js';
import Backgroundfade from './Backgroundfade.js';
import React from 'react'
import {EdgeContext} from '../App.js'
import {useContext} from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions.js';


function Gamebutton(props) {
    const { height, width } = useWindowDimensions();
    let gameboardsize = 0
    if (width < 520) {
        gameboardsize = 280
    }
    else {
        gameboardsize = 500
    }
    //equation for finding the width of the button.
    
    const size = props.size
    const { edges, setEdges } = useContext(EdgeContext);
    const outerlength = (8/((props.size * 9) + 1)) * gameboardsize;
    const length = (6/((props.size * 9) + 1)) * gameboardsize;
    const edgecontrollerlength = (10/((props.size * 9) + 1)) * gameboardsize;
    //inner square size



    function edgefinder(input) {
        let rownumber = Math.floor(input/size)
        let fullrownumber = (size * 2) + 1
        let remainder = (input % size) + 1
        let startingpoint = (rownumber * fullrownumber + remainder)
        return [startingpoint - 1, startingpoint + size + 1 - 1, startingpoint + size + size + 1 - 1, startingpoint + size - 1]
    }
    
    function backgroundrotater(i, color, number) {
        let tempedges = edgefinder(number)
        switch (i) {
            case 0:
                return (<Backgroundfade styleguide={bgcolorsize} position={color+'top2'} number={tempedges[i]}></Backgroundfade>)
            case 1:
                return (<Backgroundfade styleguide={bgcolorsize} position={color+'right2'} number={tempedges[i]}></Backgroundfade>)
            case 2:
                return (<Backgroundfade styleguide={bgcolorsize} position={color+'bottom2'} number={tempedges[i]}></Backgroundfade>)
            case 3:
                return (<Backgroundfade styleguide={bgcolorsize} position={color+'left2'} number={tempedges[i]}></Backgroundfade>)
            default:
              console.log('something went amiss');
          }
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
                return 'yellow'
            case 1:
                return 'blue'
            case 2:
                return 'red'
            default:
              console.log('something went amiss');
          }
    }
    const styles = {
        width: length+"px",
        height: length+"px",
    }
    const bgcolorsize = {
        width: outerlength + "px",
        height: outerlength + "px",
    };
    const innersquare = {
        width: edgecontrollerlength+"px",
        height: edgecontrollerlength+"px",
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
                corners.push(backgroundrotater(k, col, count))
                corners.push(rotater(k, col))
            }
            buttonrow.push(<div className="gamebutton" style={bgcolorsize}>{corners}</div>)
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

import './Nubs.css';
import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions.js';

function Nubs(props) {
    //equation for finding the width of the nub.
    const { height, width } = useWindowDimensions();
    let gameboardsize = 0
    if (width < 520) {
        gameboardsize = 280
    }
    else {
        gameboardsize = 500
    }
    const size = props.size
    const length = (1/((props.size * 9) + 1)) * gameboardsize;
    const styles = {
        width: length+"px",
        height: length+"px",
    }

    let nubs = []

    for (let i = 0; i < size + 1; i++) {
        let nubrow = []
        for (let j = 0; j < size + 1; j++) {
            nubrow.push(<div className="nub" style={styles}></div>)
            //calculate positioning

        }
        nubs.push(
          <div className="nubrow"> 
              {nubrow}
          </div>
        );
      }

    return (
        nubs
    );
}

export default Nubs;

import React, { Component } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class RandomBox extends Component {
  render() {
    
    const colorList = ['red', 'blue', 'green', 'purple', 'pink']
    let colorName = colorList[getRandomInt(5)]
    
    const fontSizeList = [1, 1.2, 1.4, 1.6, 1.8, 2]
    let rInt = getRandomInt(6)
    let fontSize = (fontSizeList[rInt] * 20) + 'px'
    let boxSize = (fontSizeList[rInt] * 150) + 'px'
    
    return (
      <div className="random-box" style={{backgroundColor: colorName, fontSize: fontSize, width: boxSize, height: boxSize}}>Random Box</div>
    )
  }
}

export default RandomBox
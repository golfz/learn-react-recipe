import React, { Component } from 'react'
import spaghetti from './sp.jpg';
import milk from './milk.jpg';
import toast from './toast.jpg';

class Food extends Component {
  render() {
    
    const dataList = [
      {
        img: spaghetti,
        title: "Spaghetti",
        ingre: ["aaaaaaa", "bbbbbb"],
        instruc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates incidunt autem blanditiis magnam tenetur porro labore, dolorum accusantium saepe inventore necessitatibus, sapiente sed numquam expedita minus unde ab eum aspernatur!"
      },
      {
        img: milk,
        title: "Milkshake",
        ingre: ["cccccc", "ddddddddd", "eeeeeee"],
        instruc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates incidunt autem blanditiis magnam tenetur porro!"
      },
      {
        img: toast,
        title: "Honey toast",
        ingre: ["ffffffff", "ggggggg"],
        instruc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates incidunt autem blanditiis magnam tenetur porro labore, dolorum accusantium!"
      },
      
    ]
    
    const h = dataList.map(function(data) {
      
        const ingreList = data.ingre.map(list => <li>{list}</li>)
      
        return (
          <div className="food-item">
            <img src={data.img} />
            <div>
              <h2>{data.title}</h2>
              <h3>Ingredients :</h3>
              <ul>{ingreList}</ul>
              <h3>Instructions :</h3>
              <p>{data.instruc}</p>
            </div>
          </div>
        )
      }
    )
    
    return (
      <div id="food-wrap">{h}</div>
    )
  }
}

export default Food
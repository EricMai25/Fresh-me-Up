import React from "react";
import { timingSafeEqual } from "crypto";

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      attire: null,
      color: null,
      type: null
    };
  }
  render() {
    return (
      <div className="search">
        <p>Name</p>
        <input onChange={(e)=>{
            let value = e.target.value
            this.setState({
                name : value
            })
        }} type="text" />
        <br />
        <p>Type of Attire</p>
        <select onChange={(e)=>{
            let value = e.target.value
            this.setState({
                attire : value
            })
        }}>
          <option value='Suit'>Jacket</option>
          <option value='Shirt'>Shirt</option>
          <option value='Pant'>Pants</option>
          <option value='Shoe'>Shoes</option>
          <option value='Watch'>Watch</option>
        </select>
        <br />
        <p>Color</p>
        <select onChange={(e)=>{
            let value = e.target.value
            this.setState({
                color : value
            })
        }}>
          <option>Red</option>
          <option>Blue</option>
          <option>Grey</option>
          <option>Purple</option>
          <option>Green</option>
          <option>Yellow</option>
          <option>Pink</option>
          <option>Brown</option>
          <option>White</option>
          <option>Orange</option>
        </select>
        <br />
        <p>Occasion</p>
        <select onChange={(e)=>{
            let value = e.target.value
            this.setState({
                type : value
            })
        }}>
          <option>Casual</option>
          <option>Buisness</option>
          <option>Formal</option>
          <option>Athletic</option>
        </select>
        <br />
        <button onClick={()=>{console.log(this.state)}}>Submit</button>
      </div>
    );
  }
}

export default search;

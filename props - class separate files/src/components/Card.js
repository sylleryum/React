import React from "react";

class Card extends React.Component {
  render() {
    function test() {
      let oi = "testing";
      return oi;
    }
    console.log(this.props);
    return (
      <div>
        this is the navbar
        <p>
          {this.props.theObj.name} {test()}
        </p>
        <p>{this.props.theObj.age}</p>
        <p>{this.props.theObj.sex}</p>
      </div>
    );
  }
}

export default Card;

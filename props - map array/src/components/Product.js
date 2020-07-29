import React from "react";

function Product(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
      <hr />
    </div>
  );
}

export default Product;

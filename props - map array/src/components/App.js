/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react";
import Product from "./Product";
import ProductsData from "./vschoolProducts";

function App() {
  //console.log(ProductsData[2].price);
  let arrayProducts = ProductsData.map(p => (
    <Product
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
    />
  ));
  console.log(arrayProducts);
  return <div>{arrayProducts}</div>;
}

export default App;

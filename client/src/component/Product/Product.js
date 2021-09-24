/* External */
import React, { useState } from "react";

/* Style */
import "./Product.scss";

/* Components */

const Product = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count+1);
  }

  return (
    <div>
      <h1>PRODUCT</h1>
    </div>
  );
}

export default Product;
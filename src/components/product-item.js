import React from "react";

const ProductItem = (props) => {
  const { id, name, price } = props;
  return (
    <div>
      {id} - {name} - {price}{" "}
    </div>
  );
};

export default ProductItem;

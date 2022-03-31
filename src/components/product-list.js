import React from "react";
import ProductSearch from "./product-search";
import products from "../data/product.json";
import ProductItem from "./product-item";
import { connect } from "react-redux";

const ProductList = (props) => {
  const { keyword } = props;
  return (
    <div>
      <h1>Product List</h1>
      <ProductSearch />
      {keyword}
      {products
        .filter((x) => x.name.includes(keyword))
        .map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ProductItem {...product} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

const mapStateToProps = ({ product }) => {
  const { keyword } = product;
  return { keyword };
};

export default connect(mapStateToProps)(ProductList);

import React from "react";
import { connect } from "react-redux";
import { SetKeyword } from "../redux/actions/product";

const ProductSearch = (props) => {
  const { SetKeyword } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onKeyUp={(e) => SetKeyword(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = {
  SetKeyword,
};

export default connect(null, mapDispatchToProps)(ProductSearch);

import React, { Component } from "react";
import { connect } from "react-redux";
import AllDetails from "../components/AllDetails";

import { addToCart, getTotalPrice } from "../redux/action";

class ProductDetails extends Component {
  
  render() {
    
    return (
      <AllDetails {...this.props}
      mapStateToProps={mapStateToProps}
      mapDispatchToProps={mapDispatchToProps}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    getTotalPrice: () => dispatch(getTotalPrice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

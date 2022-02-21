import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addToCart, getTotalPrice } from "../redux/action";

import {
  ProductContainer,
  ProductTitle,
  ProductPrice,
  ImgContainer,
  Overlay,
} from "./styles/Product.styled";

import icon from "../Assets/images/cartIcon.png";

class Product extends Component {
  render() {
    const {
      id,
      inStock,
      name,
      image,
      price,
      priceSymbol,
      addToCart,
      getTotalPrice,
      product,
      originalPrice,
    } = this.props;
    
    return (
      <ProductContainer>
        {!inStock && (
          <Overlay>
            <p>OUT OF STOCK</p>
          </Overlay>
        )}
        <ImgContainer>
          <Link to={`/product/${id}`}>
            <img src={image} />
          </Link>

          <div className="cartIcon">
            <img
              src={icon}
              onClick={() => {
                addToCart({id,name,image,price,priceSymbol,originalPrice});
                getTotalPrice();
              }}
            />
          </div>
        </ImgContainer>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>
          <span>{priceSymbol}</span>
          <span>{price}</span>
        </ProductPrice>
      </ProductContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);

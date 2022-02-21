import React, { Component } from "react";
import {
  increment,
  changePrice,
  decrement,
  getTotalPrice,
} from "../redux/action";
import { connect } from "react-redux";

import { Flex } from "./styles/layout.styled";
import {
  CartDetails,
  Border,
  Price,
  ButtonContainer,
  Image,
} from "./styles/cart.styled";
import { ProductTitle } from "./styles/Title.styled";
import { SizesList } from "./styles/ProductDetails.styled";

class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titleSize, priceSize, buttons, sizesBox } = this.props.styles;
    const {
      amount,
      id,
      name,
      image,
      price,
      priceSymbol,
      increment,
      changePrice,
      decrement,
      getTotalPrice,
    } = this.props;

    return (
      <>
        <Border />
        <Flex>
          <CartDetails>
            <ProductTitle size={titleSize}>{name}</ProductTitle>

            <Price size={priceSize}>
              <span>{priceSymbol}</span>
              <span>{price}</span>
            </Price>

            <SizesList box_w={sizesBox.w} box_ht={sizesBox.ht}>
              <li>xs</li>
              <li>s</li>
            </SizesList>
          </CartDetails>

          <div>
            <ButtonContainer btn_w={buttons.w} btn_ht={buttons.ht}>
              <button
                onClick={() => {
                  increment(id);
                  changePrice(id);
                  getTotalPrice();
                }}
              >
                +
              </button>
              <p>{amount}</p>
              <button
                onClick={() => {
                  decrement(id);
                  changePrice(id);
                  getTotalPrice();
                }}
              >
                -
              </button>
            </ButtonContainer>
          </div>

          <Image>
            <img src={image} />
          </Image>
        </Flex>
      </>
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
    increment: (id) => dispatch(increment(id)),
    changePrice: (id) => dispatch(changePrice(id)),
    decrement: (id) => dispatch(decrement(id)),
    getTotalPrice: () => dispatch(getTotalPrice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

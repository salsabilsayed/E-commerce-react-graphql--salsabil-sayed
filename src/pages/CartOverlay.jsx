import React, { Component } from "react";
import ReactDOM from 'react-dom';
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProductTitle } from "../components/styles/Title.styled";
import { SizesList } from "../components/styles/ProductDetails.styled";
import { Flex } from "../components/styles/layout.styled";
import { Overlay, MiniCart } from "../components/styles/miniCart";

const overlayRoot = document.getElementById('overlayRoot');

class CartOverlay extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    overlayRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    overlayRoot.removeChild(this.el);
  }

  handleClick =() =>{
    this.props.toggleOverlay();
    this.props.history.push('/cart')
  }

  changeLocation = (e)=>{
    e.preventDefault()
    const currentLocation = window.location.href
    window.location.href = currentLocation+"cart"
  }
  render() {
    const {products, totalPrice} = this.props;
    console.log(this.props);
    console.log('overlay on');

    return ReactDOM.createPortal(<Overlay {...this.props}>
      <MiniCart>
        <Flex justify="flex-start">
          <h5>MyBag: </h5>
          <p>
            <span>{products.length}</span>
            <span>{products.length <= 1 ? "item": "items"}</span>
          </p>
        </Flex>

        {products.map(item =>{
          return <CartItem 
          key={item.product.id}
          id={item.product.id}
          name={item.product.name}
          price={item.product.price}
          priceSybmol={item.product.priceSybmol}
          image={item.product.image}
          amount={item.amount}

          styles={{
                  titleSize:'1rem',
                  priceSize:'1rem',
                  buttons:{
                    w:'25px',
                    ht:'25px'
                  },
                  sizesBox:{
                    w:'25px',
                    ht:'25px'
                    }
              }}
          />
        })}
          
          <Flex justify="space-between">
            <h4>Total</h4>
            <p>$
              {totalPrice.toFixed(2)}
            </p>
          </Flex>
              <button onClick={this.handleClick}>
                
              view cart
              </button>
      </MiniCart>
    </Overlay>,this.el)
    
  }
}

const mapStateToProps = state => {
  return {
    products:state.products,
    totalPrice: state.totalPrice
  }
};

export default connect(mapStateToProps)(CartOverlay);


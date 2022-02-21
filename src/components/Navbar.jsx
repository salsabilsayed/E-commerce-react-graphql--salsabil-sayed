import React, { Component } from "react";
import CategoryList from "./CategoryList";
import CurrencyList from "./CurrencyList";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {
  Nav,
  List,
  LogoContainer,
  Dropdown,
  CartContainer,
} from "./styles/Navbar.styled";
import { Flex } from "./styles/layout.styled";

import logo from "../Assets/images/logo.svg";
import logoArrow from "../Assets/images/logoArrow.svg";
import logoCurve from "../Assets/images/logocurve.svg";
import downArrow from "../Assets/images/drop-down-arrow-icon.jpg";
import cart from "../Assets/images/cartIcon.png";



class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleOverlay = () =>{
    this.props.toggleOverlay()
    //this.props.history.push('/cartOverlay')
    
  }

  render() {
    console.log(this.props);
    // const { categories, errorCat, loadingCat } = this.props.getCategories;
    // const { currencies, errorCurr, loadingCurr } = this.props.getCurrencies;

    return (
      <Nav>
        <Flex justify="space-between">

          <CategoryList />
          <LogoContainer>
            <img src={logo} alt="logo" />
            <img src={logoArrow} className="arrow" alt="logo arrow icon" />
            <img src={logoCurve} className="curve" alt="logo curve icon" />
          </LogoContainer>

          <Flex justify="space-between">
            <Dropdown>
              <span>$</span>
              <img src={downArrow} alt="dropdown arrow icon" />

              {/* <CurrencyList /> */}
            </Dropdown>

          
            <CartContainer onClick={this.handleOverlay}>
              <img src={cart} alt="shopping cart icon" className="cart" />
              <div>
                <span>{this.props.products.length}</span>
              </div>
            </CartContainer>
         
          </Flex>
        </Flex>
      </Nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    products:state.products
  }
};

export default connect(mapStateToProps)(Navbar);

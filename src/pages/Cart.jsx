import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';

import { Container } from '../components/styles/Container.styled';
import { CartTitle } from '../components/styles/Title.styled';

class Cart extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.products);
        return (
            <Container>
                <CartTitle>cart</CartTitle>
                <CartItem styles={{
                    titleSize:'1.5rem',
                    priceSize:'1.2rem',
                    buttons:{
                        w:'40px',
                        ht:'40px'
                      },
                    sizesBox:{
                    w:'55px',
                    ht:'40px'
                    }
                }}/>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
      products:state.products
    }
  };
  
  // const mapDispatchToProps = dispatch => {
  //   return{
  //       addToCart:()=> dispatch(addToCart())
  //   }
  // };

export default connect(mapStateToProps)(Cart);



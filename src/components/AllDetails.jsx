import React, { Component } from 'react';
import { GET_PRODUCT } from "../graphql/Queries";
import { graphql} from "react-apollo";

import { Flex } from "../components/styles/layout.styled";
import { Container } from "../components/styles/Container.styled";
import {
  Content,
  ImageList,
  SizesList,
  Button
} from "../components/styles/ProductDetails.styled";
import { ProductTitle } from "../components/styles/Title.styled";

class AllDetails extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          galleryIndex: 0
        }
      }
   
  render() {
    const {error,loading,product} = this.props.data;
    const { addToCart,getTotalPrice } = this.props.mapDispatchToProps;
    const {id,name, gallery, description,prices, attributes} = this.props.data.product;
  
    console.log(this.props.data.product);
    console.log(this.props.data);
    const {sizesBox} = this.props.styles;
    let des;
    //parse the returned description
    if(product && !loading){
      const parser = new DOMParser();
      const document = parser.parseFromString(product.description, "text/html");
      console.log(document);
      des = document.getElementsByTagName('body')[0].textContent;
    }
    return (
        <Container>
          {loading && <p>Loading product...</p>}
          {!loading && product && <Flex>
            <ImageList>
              {product?.gallery.map((item, index)=>{
                return <li key={index} onClick={()=> this.setState({galleryIndex:index})}>
                  <img src={item} />
                </li>
              })}
              
            </ImageList>
            <div>
              <img src={product?.gallery[this.state.galleryIndex]} />
            </div>
            <Content>
              <ProductTitle size="1.5rem">
                {product.name}
                  {/* <span>Apollo</span>
                  <br />
                  Running Shot */}
               </ProductTitle>
              <div>
                  <h4>size:</h4>
                  <SizesList box_w={sizesBox.w} box_ht={sizesBox.ht}>
                    {product.attributes.map(attribute=>{
                      if(attribute.type !== 'swatch'){
                       
                       return attribute.items.map(item =>{
                          return <li key={item.id} className="sizes">
                            {item.value}
                            </li>
                        })
                      }
                    })}
                  </SizesList>
                    <SizesList>
                    {product.attributes.map(attribute=>{
                      if(attribute.type === 'swatch'){
                       
                       return attribute.items.map(item =>{
                          return <li 
                          key={item.id} 
                          className="colors"
                          style={{backgroundColor:item.value}}
                          >
                            </li>
                        })
                      }
                    })}
                    </SizesList>
              </div>
              <h4>price</h4>
              <p>
                <span>{product.prices[0].currency.symbol}</span>
                <span>{product.prices[0].amount}</span>
              </p>
              <Button onClick={this.addToCart(id,name,prices[0].amount)}>add to cart</Button>
              <p>{des}</p>
             
            </Content>
          </Flex>}
          {error && <p>Somthing went wrong...</p>}
        </Container>
      );
  }
}

export default graphql(GET_PRODUCT,{
    options: ({ match }) => ({ variables: { id: match.params.id } }),
  })(AllDetails);

import React, { Component } from 'react';
import Product from './Product';
import { graphql} from "react-apollo";
import { GET_ALL_PRODUCTS } from '../graphql/Queries';


class ProductsList extends Component {
    render() {
        const {error,loading,category} = this.props.data;

        console.log(this.props.data);
        return (
            <>
            {loading && <p>Loading categories...</p>}
                {!loading && category.products.map(product => {
                    return <Product 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.gallery[0]}
                    priceSymbol={product.prices[0].currency.symbol}
                    price={product.prices[0].amount}
                    originalPrice={product.prices[0].amount}
                    inStock={product.inStock}
                    product={product}
                    />
                })}
                {error && <p>Somthing went wrong...</p>}
            </>
        )
    }
}

export default graphql(GET_ALL_PRODUCTS)(ProductsList);

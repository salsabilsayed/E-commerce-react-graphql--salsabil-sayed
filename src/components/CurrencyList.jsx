import React, { Component } from 'react';
import { graphql} from "react-apollo";
import { GET_CURRENCIES } from '../graphql/Queries';
import { CurrenciesList } from './styles/Navbar.styled';

class CurrencyList extends Component {
    render() {
        const {loading, error, currencies} = this.props.data;

        return (
            <CurrenciesList>
                {loading && <p>Lodding categories...</p>}
                {!loading && currencies.map((item,index) =>{
                    return <li key={index}>
                        <span>{item.symbol}</span>
                        <span>{item.label}</span>
                    </li>
                })}
                {error && <p>Somthing went wrong...</p>}
            </CurrenciesList>
        )
    }
}

export default graphql(GET_CURRENCIES)(CurrencyList);

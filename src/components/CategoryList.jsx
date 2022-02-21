import React, { Component } from "react";
import { graphql } from "react-apollo";
import { CategoriesList } from "./styles/Navbar.styled";
import { GET_CATEGORIES } from "../graphql/Queries";

class CategoryList extends Component {
  render() {
    const { categories, error, loading } = this.props.data;

    return (
      <CategoriesList>
        {loading && <p>Lodding categories...</p>}
        {!loading && categories.map((categoty, index) => {
          return <li key={index}>{categoty.name}</li>;
        })}
        {error && <p>Somthing went wrong...</p>}
      </CategoriesList>
    );
  }
}

export default graphql(GET_CATEGORIES)(CategoryList);

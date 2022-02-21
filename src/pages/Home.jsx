import React, { Component } from "react";
import ProductsList from "../components/ProductsList";

import { Container } from "../components/styles/Container.styled";
import { Grid } from "../components/styles/layout.styled";
import { CategoryTitle } from "../components/styles/Title.styled";
import CartOverlay from "./CartOverlay";

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section>
        <Container>
          <CategoryTitle>Category name</CategoryTitle>
          <Grid>
              <ProductsList />
          </Grid>
        </Container>
      </section>
    );
  }
}

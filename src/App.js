import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router ,Route,Switch } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CartOverlay from "./pages/CartOverlay";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      overlayOn: false
    }
  }

  toggleOverlay = () => {
    this.setState({overlayOn: !this.state.overlayOn});
  }

  render(){

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar toggleOverlay={this.toggleOverlay}/>
       
          <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/product/:id" render={(props)=> <ProductDetails {...props} styles={{sizesBox:{
          w:'55px',
          ht:'40px'
        }}}/>} />
        {/* <Route path="/cart" render={props=>  <Cart {...props}/>}/> */}
         
      
        {/* <Route path="/cartOverlay" render={(props)=> <CartOverlay {...props} toggleOverlay={this.toggleOverlay}/>}/> */}
      
        </Switch>
        {this.state.overlayOn && 
        <CartOverlay toggleOverlay={this.toggleOverlay}/>
        }
      </ThemeProvider>
    );
  }
}

export default App;

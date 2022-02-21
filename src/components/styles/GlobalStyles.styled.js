import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box
}

body{
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.darkGray};
    font-family: 'Raleway', sans-serif;
}

p{
    line-height:1.5
}

img{
    max-width:100%;
}

`
export default GlobalStyles;
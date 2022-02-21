import styled from "styled-components";

export const Nav = styled.nav`
    position:fixed;
    top:0;
    right: 0;
    left:0;
    z-index:10;
    padding: 0 7.5%;
    background-color: ${({theme})=> theme.colors.white};

    & .cart{
            width: 1.6rem;
        }
`

export const LogoContainer = styled.div`
    position:relative;

    & .arrow{
        position:absolute;
        top:33%;
        right:20%;
    }

    & .curve{
        position:absolute;
        top:35%;
        left:25%;
    }
`

export const CategoriesList = styled.ul`
    list-style-type: none;
    display:flex;
    flex-shrink:1;
    
    & li{
        margin-right: 1.5rem;
        padding:0 0.3rem;
        border-bottom: 2px solid ${({theme})=> theme.colors.green};
        padding: 1.2rem 0;
        text-transform: uppercase;
    }
`
export const Dropdown = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    font-size:18px;
    font-weight:500;
    cursor: pointer;

    & span{
        margin:0 0.4rem;
    }

    & img{
        width:1rem;
    }
    &:hover ul{
        opacity: 1;
    }
`
export const CurrenciesList = styled.ul`
        list-style-type: none;
        position:absolute;
        top:150%;
        left:-50%;
        border-radius: 0.3rem;
        background-color:${({theme})=> theme.colors.white};
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.2);
        z-index: 10;
        opacity:0;
        transition: opacity 0.3s;

        & li{
        padding: 0.6rem 1.5rem;
    }

    
`
export const CartContainer = styled.div`
    position: relative;
    margin-left:0.5rem;
    cursor: pointer;

    & div{
        display:flex;
        align-items: center;
        justify-content: center;
        position:absolute;
        top:-0.5rem;
        right: -0.5rem;
        border-radius:50%;
        width:20px;
        height: 20px;
        font-size:12px;
        background-color: ${({theme})=> theme.colors.black};
        color: ${({theme})=> theme.colors.white};
    }
`


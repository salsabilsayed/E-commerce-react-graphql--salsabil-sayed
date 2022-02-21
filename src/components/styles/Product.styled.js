import styled from "styled-components";


export const ProductContainer = styled.div`
    padding: 1rem;
    position:relative;
    z-index:1;
    
    &:hover {
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    &:hover .cartIcon{
        opacity: 1;
    }
`

export const ProductTitle = styled.h3`
    font-size:1.125rem;
    font-weight: 300;
    padding: 0.5rem 0;
`

export const ProductPrice = styled.p`
    font-size:1.125rem;
    font-weight: 600;
`

export const ImgContainer = styled.div`
    position: relative;

    & > .cartIcon{
        width:40px;
        height: 40px;
        padding:0.5rem;
        border-radius:50%;
        background-color: ${({theme}) => theme.colors.green};
        position:absolute;
        bottom:-10px;
        right:10px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
    }

    & div > img{
        width:20px;
        height:20px;
    }
    
`

export const Overlay = styled.div`
    background-color: ${({theme}) => theme.colors.productOverlay};
    display: flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    z-index:5;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;

    & p{
        color:${({theme}) => theme.colors.lightGray};
    }
`
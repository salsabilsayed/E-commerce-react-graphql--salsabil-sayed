import styled from "styled-components";


export const Overlay = styled.div`
    background-color: ${({theme}) => theme.colors.cartOverlay};
    min-height: 100vh;
    position: Fixed;
    width:100%;
    z-index: 3;
`

export const MiniCart = styled.section`
    width:20%;
    padding: 0.5rem;
    background-color: ${({theme}) => theme.colors.white};
    position: absolute;
    top: 8%;
    right: 7.5%;
    z-index: 5;


    & div.bag_items span{
        margin-right: 0.3rem;
    }

    & h5{
        margin-right: 0.5rem;
    }
`
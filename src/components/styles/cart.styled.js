import styled from "styled-components";

export const CartDetails = styled.div`
    width:60%;
    padding:0.6rem 0;

`
export const Border = styled.div`
   width:100%;
   height:1px;
   background-color: #E5E5E5;
`

export const Price = styled.h5`
     font-weight:700;
     font-size:${props => props.size};
     padding: 0.7rem 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    & button{
        outline:none;
        border: 1px solid ${({theme})=> theme.colors.black};
        width:${props => props.btn_w};
        height:${props => props.btn_ht};
        background-color: transparent;
        cursor: pointer;
    }

    & p{
        padding: 1rem 0;
    }
`

export const Image = styled.div`
    width: 25%;
    padding:0.5rem;
`
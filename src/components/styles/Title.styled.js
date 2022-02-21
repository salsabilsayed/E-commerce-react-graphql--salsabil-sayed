import styled from "styled-components";


export const CategoryTitle = styled.h2`
    font-weight:300;
    font-size:2.625rem;
    margin-bottom:3rem;
`

export const CartTitle = styled.h2`
    font-size:32px;
    font-weight:700;
    text-transform:uppercase;
    margin-bottom:3rem;
`

export const ProductTitle = styled.h3`
    font-weight:300;
    font-size: ${props => props.size};
`
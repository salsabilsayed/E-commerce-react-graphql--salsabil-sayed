import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content:${props => props.justify};
`



export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
`
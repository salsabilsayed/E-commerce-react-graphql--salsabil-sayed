import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-self: stretch;
    width:30%;
    padding: 0 2rem 0 0.5rem;
`

export const ImageList = styled.ul`
    list-style-type:none;
    width:10%;
    align-self: flex-start;

    & li{
        margin-bottom: 1rem;
    }
`

export const SizesList = styled.ul`
    list-style-type:none;
    display:flex;
    margin-top: 0.5rem;

    & li.sizes{
        display: flex;
        align-items: center;
        justify-content:center;
        width: ${props => props.box_w};
        height: ${props => props.box_ht};
        margin-right: 0.3rem;
        border: 1px solid black;
    }

    & li.colors{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right:0.3rem;
    }
`



export const Button = styled.button`
    border: none;
    outline: none;
    padding: 0.8rem;
    background-color: ${({theme}) => theme.colors.green};
    font-weight: 600;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.white};
`
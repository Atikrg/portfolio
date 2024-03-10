import { Link } from "react-router-dom";
import styled from "styled-components";




export const CardImage = styled.img`
    height: 200px;
    width: 390px;

`

export const SpecificTitle = styled.div`
    opacity: 65%;
    margin: 22px 12px;
    font-weight: 500;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
`

export const Content = styled.div`
    margin-left: 25px;
    font-weight: 900;
    font-size: 28px;
    font-family: var(--cairosa)

 `

export const ProjectDescription = styled.div`
    font-size: 16px;
    font-family: var(--cairosa);
    text-align: justify;
`


export const DataSource = styled.div`
    margin-top: 12px;
    opacity: 65%;
    font-size: 12px;
    font-family: var(var(--cairosa));
    display: flex;
    flex-direction: row;

`
export const Source = styled(Link)`
    margin-left: 12px;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: rgb(121, 29, 220);
     }
`

export const ProjectComponents = styled.div`
    margin: 24px;
    width: 392px;
    padding: 0;
    
`


/* 







*/

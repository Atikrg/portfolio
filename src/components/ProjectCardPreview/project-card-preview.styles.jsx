import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardPreview = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-wrap: wrap;
    margin:12px;

`

export const Header = styled.div`
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

`

export const ProjectLink = styled(Link)`
    margin-right: 245px;
    text-transform: uppercase;
    margin-top: -40px;
    color: red;
    float: right;
    color: rgb(51, 84, 246);
    cursor: pointer;
`

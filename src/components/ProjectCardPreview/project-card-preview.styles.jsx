import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardPreview = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-wrap: wrap;

`

export const ProjectHeader = styled.div`
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center

`

export const ProjectLink = styled(Link)`
    margin-right: 45px;
    margin-top: -40px;
    color: red;
    float: right;
    color: rgb(51, 84, 246);
    cursor: pointer;

`

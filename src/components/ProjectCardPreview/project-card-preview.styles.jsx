import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #121212;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ff8a00;
  margin-bottom: 30px;
  text-align: center;
`;

export const CardPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 140px;
  width: 100%;
  max-width: 1000px;
`;

export const NoProjectsMessage = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  text-align: center;
`;

export const ViewMoreButton = styled(Link)`
  text-align: center;
  background-color: #ff8a00;
  color: #fff;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67600;
  }
`;

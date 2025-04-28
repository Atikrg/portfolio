import styled from "styled-components";

export const ContactComponent = styled.div`
  background: #0e0e0e;
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContent = styled.div`
  background: #1a1a1a;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputEmail = styled.input`
  background: #222;
  border: 1px solid #444;
  padding: 16px;
  border-radius: 8px;
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border-color: #ff8a00;
    outline: none;
  }
`;

export const InputArea = styled.div`
  width: 100%;
`;

export const InputText = styled.textarea`
  background: #222;
  border: 1px solid #444;
  padding: 16px;
  border-radius: 8px;
  color: white;
  width: 100%;
  font-size: 1rem;
  resize: none;
  &:focus {
    border-color: #ff8a00;
    outline: none;
  }
`;

export const ContactButton = styled.button`
  background: #ff8a00;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
  &:hover {
    background: #e67600;
  }
`;

import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 16px;
  color: #3b0764;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #d0bfff;
  background: #faf5ff;
  font-size: 16px;
  outline: none;
  width: 300px;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 6px rgba(124, 58, 237, 0.3);
  }
`;

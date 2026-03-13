import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%);
  box-shadow: 0 6px 14px rgba(124, 58, 237, 0.1);
`;

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

export const AddButton = styled.button`
  background: linear-gradient(90deg, #7c3aed, #9333ea);
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(124, 58, 237, 0.2);
    opacity: 0.9;
  }
`;

import styled from "styled-components";

export const Message = styled.div`
  display: block;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  margin-bottom: 16px;
  min-width: 400px;
  height: 100px;
  background: linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%);
  border-radius: 16px;
  border: 1px solid #d0bfff;
  box-shadow: 0 4px 10px rgba(124, 58, 237, 0.1);
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  margin-bottom: 16px;
  width: 400px;
  background: linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%);
  border-radius: 16px;
  border: 1px solid #d0bfff;
  box-shadow: 0 4px 10px rgba(124, 58, 237, 0.1);
`;

export const DeleteButton = styled.button`
  background: linear-gradient(90deg, #f44336, #d32f2f);
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(244, 67, 54, 0.4);
    opacity: 0.9;
  }
`;

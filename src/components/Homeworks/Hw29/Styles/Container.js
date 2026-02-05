import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f5f3ff 0%, #dcbbffff 100%);
  box-shadow: 0 6px 14px rgba(124, 58, 237, 0.1);
  max-width: fit-content;
  max-height: fit-content;
  margin: 40px auto;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`;

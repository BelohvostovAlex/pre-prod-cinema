import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  svg {
    margin-right: 16px;
    height: 40px;
    width: 40px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

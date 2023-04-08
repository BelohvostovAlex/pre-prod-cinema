import styled from "styled-components";

const boxSvgWidth = 40;
const boxSvgHeight = 40;

export const Box = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  text-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);
  ${({ theme }) => theme.margin.mb20}
  svg {
    margin-right: 16px;
    height: ${boxSvgHeight}px;
    width: ${boxSvgWidth}px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

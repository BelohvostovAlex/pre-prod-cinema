import styled from "styled-components";

const HeaderButtonGroupSvgWidth = 25;
const HeaderButtonGroupSvgHeight = 25;

export const HeaderButtonGroup = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    width: ${HeaderButtonGroupSvgWidth}px;
    height: ${HeaderButtonGroupSvgHeight}px;
    cursor: pointer;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  svg:hover path {
    fill: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.3s;
  }
`;

import styled from "styled-components";

const boxHeight = 330;
const boxWidth = 141;
const controlsWidth = 11;
const controlsHeight = 42;
const itemDimensions = {
  center: {
    width: 75,
    height: 110,
  },
  other: {
    width: 55,
    height: 80,
  },
};

export const Box = styled.div`
  width: ${boxWidth}px;
  height: ${boxHeight}px;
  ${({ theme }) => theme.flexAlignCenter};
`;

export const ItemsWrapper = styled.div`
  margin-right: 20px;
`;

export const Item = styled.div`
  margin: 10px auto;
  width: ${itemDimensions.center.width}px;
  height: ${itemDimensions.center.height}px;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  &:nth-of-type(1),
  &:nth-of-type(3) {
    width: ${itemDimensions.other.width}px;
    height: ${itemDimensions.other.height}px;
  }
  ${({ theme }) => theme.animations.skeleton};
`;

export const Controls = styled.div`
  width: ${controlsWidth}px;
  height: ${controlsHeight}px;
  ${({ theme }) => theme.animations.skeleton};
`;

import styled from "styled-components";

import { MovieScreenCellExampleProps } from "./interfaces";

const MovieScreenWrapperMaxWidth = 480;
const MovieScreenWrapperMaxHeight = 550;
const MovieScreenCellExampleWidth = 24;
const MovieScreenCellExampleHeight = 24;

export const MovieScreenWrapper = styled.table`
  max-width: ${MovieScreenWrapperMaxWidth}px;
  max-height: ${MovieScreenWrapperMaxHeight}px;
  background: ${({ theme }) => theme.colors.screenDark};
  padding: 20px 20px 15px 20px;
  margin: 30px auto;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    padding: 15px 10px 15px 10px;
  }
`;

export const MovieScreenHead = styled.thead``;

export const MovieScreenHeadRow = styled.tr``;

export const MovieScreenTitle = styled.th`
  ${({ theme }) => theme.typography.poppins_r};
  font-size: ${({ theme }) => theme.fontSize[30]};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const MovieScreenSeatsWrapper = styled.tbody`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieScreenFooter = styled.tfoot``;

export const MovieScreenFooterRow = styled.tr`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    flex-direction: column;
  }
`;

export const MovieScreenFooterItem = styled.td`
  ${({ theme }) => theme.flexAlignCenter};
  ${({ theme }) => theme.typography.poppins_r};
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 6px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }
`;

export const MovieScreenCellExample = styled.div<MovieScreenCellExampleProps>`
  width: ${MovieScreenCellExampleWidth}px;
  height: ${MovieScreenCellExampleHeight}px;
  border: ${({ theme, selected, reserved }) =>
    `solid 2px ${
      reserved
        ? theme.colors.lightGray
        : selected
        ? theme.colors.secondary
        : theme.colors.lightGray
    }`};
  background: ${({ theme, selected, reserved }) =>
    reserved
      ? theme.colors.lightGray
      : selected
      ? theme.colors.secondary
      : "transparent"};
  border-radius: ${({ theme }) => theme.border_radius[8]};
  margin-right: 5px;
`;

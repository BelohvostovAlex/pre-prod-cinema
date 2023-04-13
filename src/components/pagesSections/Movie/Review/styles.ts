import styled from "styled-components";

import { ReviewTextProps } from "./interface";

const ReviewWrapperWidthPercent = 30;
const ReviewWrapperHeight = 400;

export const ReviewWrapper = styled.div`
  width: ${ReviewWrapperWidthPercent}%;
  min-height: ${ReviewWrapperHeight}px;
  filter: drop-shadow(15px 15px 50px #000000);
  border-radius: ${({ theme }) => theme.border_radius[20]};
  background: ${({ theme }) => theme.colors.regularGray};
  color: ${({ theme }) => theme.colors.primary};
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewInfo = styled.div`
  scrollbar-width: none;
`;

export const ReviewTitle = styled.h3`
  ${({ theme }) => theme.typography.nunito_r};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize[24]};
  text-align: center;
`;

export const ReviewFrom = styled.h4`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[14]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
`;

export const ReviewText = styled.p<ReviewTextProps>`
  ${({ theme }) => theme.typography.nunito_l_ital};
  font-size: ${({ theme }) => theme.fontSize[14]};
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  max-height: ${({ isOpen }) => (isOpen ? "400px" : "230px")};
  overflow-y: ${({ isOpen }) => (isOpen ? "scroll" : "hidden")};
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  transition: max-height linear 0.4s;
`;

export const ReadMoreWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;

export const ReadMoreTitle = styled.div`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[14]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.margin.mb10};
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.hover}
  }
`;

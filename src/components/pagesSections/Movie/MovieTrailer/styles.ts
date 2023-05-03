import styled from "styled-components";

const MovieTrailerItemWidth = 520;
const MovieTrailerItemWidthM = 400;
const MovieTrailerItemWidthSM = 350;
const MovieTrailerItemWidthS = 100;
const MovieTrailerItemHeight = 280;

export const MovieTrailerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export const MovieTrailerTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[24]};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const MovieTrailerItem = styled.div`
  width: ${MovieTrailerItemWidth}px;
  height: ${MovieTrailerItemHeight}px;
  filter: drop-shadow(15px 15px 50px #000000);
  margin: 50px auto 80px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    width: ${MovieTrailerItemWidthM}px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[16]};
    width: ${MovieTrailerItemWidthSM}px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    width: ${MovieTrailerItemWidthS}%;
  }
`;

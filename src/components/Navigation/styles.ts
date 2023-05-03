import styled from "styled-components";

export const Nav = styled.nav`
  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    a:first-of-type {
      margin-right: 20px;
    }
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    ${({ theme }) => theme.flexAlignCenter};
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    a:first-of-type {
      margin-right: 0px;
    }
    a {
      font-size: ${({ theme }) => theme.fontSize[21]};
      margin-right: 0px;
      margin-bottom: 14px;
    }
  }
`;

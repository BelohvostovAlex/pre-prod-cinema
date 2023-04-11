import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: ${({ theme }) => theme.margin.mb30};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 2px;
`;

export const BottomInfoWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: center;
`;

export const Typography = styled.p`
  ${({ theme }) => theme.typography.inria_l_ital};
  text-align: center;
  margin: 5px;
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Link = styled.a`
  ${({ theme }) => theme.typography.inria_l_ital};
  font-size: ${({ theme }) => theme.fontSize[12]};
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.hover}
  }
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};
`;

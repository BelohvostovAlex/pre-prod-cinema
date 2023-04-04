import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 30px;
`;

export const FormTitle = styled.h2`
  ${({ theme }) => theme.typography.inria_l_ital};
  font-size: 16px;
  width: 70%;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

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

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  width: 100%;
  padding: 6px 0px;
  ${({ theme }) => theme.typography.poppins_l};
  font-size: 14px;
  border-bottom: 1.6px ${({ theme }) => theme.colors.primary} solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 2px;
`;

export const BottomInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Typography = styled.p`
  ${({ theme }) => theme.typography.inria_l_ital};
  text-align: center;
  margin: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Link = styled.a`
  ${({ theme }) => theme.typography.inria_l_ital};
  font-size: 12px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.hover}
  }
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};
`;

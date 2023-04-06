import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
`;
export const InoutLabel = styled.label``;

export const StyledInput = styled.input`
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

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.typography.poppins_l};
  font-size: 10px;
  text-align: start;
`;

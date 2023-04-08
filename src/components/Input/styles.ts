import styled from "styled-components";

const inputWrapperWidthPercent = 100;
const styledInputWidthPercent = 100;

export const InputWrapper = styled.div`
  width: ${inputWrapperWidthPercent}%;
`;
export const InoutLabel = styled.label``;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  width: ${styledInputWidthPercent}%;
  padding: 6px 0px;
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[14]};
  border-bottom: 1.6px ${({ theme }) => theme.colors.primary} solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[10]};
  text-align: start;
`;

import styled from "styled-components";

const svgHeight = 40;
const svgWidth = 40;

export const EditProfileWrapper = styled.div``;

export const EditProfileForm = styled.form``;

export const InputFileWrapper = styled.div`
  ${({ theme }) => theme.margin.mb20}
  svg {
    height: ${svgHeight}px;
    width: ${svgWidth}px;
    margin-right: 16px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputUploadFile = styled.input``;
export const InputRadio = styled.input`
  margin-left: 5px;
`;

export const InputUploadFileLabel = styled.label`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: start;
  cursor: pointer;
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[14]};
  &:hover {
    ${({ theme }) => theme.hover};
  }
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputGenderWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: start;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  svg {
    height: ${svgHeight}px;
    width: ${svgWidth}px;
    margin-right: 16px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

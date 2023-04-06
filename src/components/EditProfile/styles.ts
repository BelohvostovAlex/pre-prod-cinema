import styled from "styled-components";

export const EditProfileWrapper = styled.div``;

export const EditProfileForm = styled.form``;

export const InputFileWrapper = styled.div`
  margin-bottom: 20px;
  svg {
    height: 40px;
    width: 40px;
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
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  ${({ theme }) => theme.typography.poppins_l};
  font-size: 14px;
  &:hover {
    ${({ theme }) => theme.hover};
  }
  margin-right: 10px;
`;

export const InputGenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 20px;
  svg {
    height: 40px;
    width: 40px;
    margin-right: 16px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

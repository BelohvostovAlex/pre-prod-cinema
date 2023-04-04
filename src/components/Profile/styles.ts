import styled from "styled-components";

export const ProfileWrapper = styled.div``;

export const ProfileIconWrapper = styled.div`
  width: 35%;
  height: 35%;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileName = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb}
  font-size: 21px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 30px;
  text-transform: capitalize;
`;

export const ProfileId = styled.p`
  ${({ theme }) => theme.typography.poppins_sb}
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const ProfileGender = styled.p`
  ${({ theme }) => theme.typography.poppins_sb}
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const ProfileIconWrapper = styled.div`
  width: 35%;
  height: 35%;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 100%;
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

export const ProfileLogoWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  height: 20px;
  transform: translateX(-50%);
  svg {
    width: 100%;
    height: 100%;
  }
`;

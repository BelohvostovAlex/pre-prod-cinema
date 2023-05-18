import styled from "styled-components";

const profileWrapperHeightPercent = 100;
const profileIconWrapperHeightPercent = 35;
const profileIconWrapperWidthPercent = 35;
const profileIconWrapperSVGHeightPercent = "auto";
const profileIconWrapperSVGWidthPercent = 100;
const profileImgWidthPercent = 100;
const profileLogoWrapperHeight = 20;
const profileLogoWrapperSVGHeight = 100;
const profileLogoWrapperSVGWidth = 100;

export const ProfileWrapper = styled.div`
  position: relative;
  height: ${profileWrapperHeightPercent}%;
`;

export const ProfileIconWrapper = styled.div`
  width: ${profileIconWrapperWidthPercent}%;
  height: ${profileIconWrapperHeightPercent}%;
  svg {
    width: ${profileIconWrapperSVGWidthPercent}%;
    height: ${profileIconWrapperSVGHeightPercent};
  }
`;

export const ProfileImg = styled.img`
  width: ${profileImgWidthPercent}%;
  border-radius: 100%;
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;

export const ProfileName = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb}
  font-size:   ${({ theme }) => theme.fontSize[21]};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 30px;
  text-transform: capitalize;
`;

export const ProfileId = styled.p`
  ${({ theme }) => theme.typography.poppins_sb}
  font-size:   ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const ProfileGender = styled.p`
  ${({ theme }) => theme.typography.poppins_sb}
  font-size:   ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const ProfileMenu = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  margin-top: 20px;
`;

export const ProfileLogoWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  height: ${profileLogoWrapperHeight}px;
  transform: translateX(-50%);
  svg {
    width: ${profileLogoWrapperSVGWidth}%;
    height: ${profileLogoWrapperSVGHeight}%;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

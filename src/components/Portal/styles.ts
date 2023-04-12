import styled from "styled-components";

const portalContainerWidthPercent = 100;
const portalContainerHeightPercent = 100;

export const PortalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${portalContainerWidthPercent}%;
  height: ${portalContainerHeightPercent}%;
  z-index: ${({ theme }) => theme.zIndex[1000]};
  background: rgba(31, 31, 38, 0.7);
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

import styled from "styled-components";

const ErrorBoundaryWrapperMinHeightVH = 100;
const ErrorBoundaryTitleWidthPercent = 60;

export const ErrorBoundaryWrapper = styled.div`
  min-height: calc(${ErrorBoundaryWrapperMinHeightVH}vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorBoundaryTitle = styled.h2`
  width: ${ErrorBoundaryTitleWidthPercent}%;
  ${({ theme }) => theme.typography.inria_l_ital};
  font-size: ${({ theme }) => theme.fontSize[24]};
  color: ${({ theme }) => theme.colors.primary};
`;

import styled from "styled-components";

const TicketWrapperWidth = 520;
const TicketWrapperMinHeight = 160;
const TicketWrapperMinHeightS = 100;
const TicketTitleMaxWidthPercent = 85;
const TicketImgWidthPercent = 25;
const TicketImgHeightPercent = 100;
const TicketContentPercent = 100;

export const TicketWrapper = styled.div`
  width: ${TicketWrapperWidth}px;
  min-height: ${TicketWrapperMinHeight}px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.regularGray};
  border-radius: ${({ theme }) => theme.border_radius[18]};
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.flexAlignCenter};
  margin-bottom: ${({ theme }) => theme.margin.mb20};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    min-height: ${TicketWrapperMinHeightS}px;
  }
`;

export const TicketImg = styled.img`
  border-radius: ${({ theme }) => theme.border_radius[18]};
  height: ${TicketImgHeightPercent}%;
  width: ${TicketImgWidthPercent}%;
`;

export const TicketContent = styled.div`
  padding: 5px 20px 5px 10px;
  width: ${TicketContentPercent}%;
`;

export const TicketHeader = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: ${TicketContentPercent}%;
`;

export const TicketTitle = styled.h4`
  ${({ theme }) => theme.typography.poppins_b};
  font-size: ${({ theme }) => theme.fontSize[18]};
  max-width: ${TicketTitleMaxWidthPercent}%;
  margin-bottom: 5px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;

export const TicketRating = styled.div`
  ${({ theme }) => theme.typography.poppins_b};
  font-size: ${({ theme }) => theme.fontSize[18]};
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    width: 16px;
    height: auto;
    margin-left: 5px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;

export const TicketDate = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[16]};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const TicketId = styled.div`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[14]};
  ${({ theme }) => theme.flexAlignCenter};
  margin-bottom: 5px;
  svg {
    width: 16px;
    height: auto;
    margin-right: 5px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const TicketBottom = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  margin-top: 5px;
`;

export const TicketSeatsWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const TicketSeats = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[12]};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const TicketPrice = styled.p`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[14]};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;

import styled from "styled-components";

const TicketWrapperWidth = 520;
const TicketWrapperMinHeight = 160;
const TicketTitleMaxWidthPercent = 85;

export const TicketWrapper = styled.div`
  width: ${TicketWrapperWidth}px;
  min-height: ${TicketWrapperMinHeight}px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.regularGray};
  border-radius: ${({ theme }) => theme.border_radius[18]};
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.flexAlignCenter};
  margin-bottom: ${({ theme }) => theme.margin.mb20};
`;

export const TicketImg = styled.img`
  border-radius: ${({ theme }) => theme.border_radius[18]};
  height: 100%;
  width: 25%;
`;

export const TicketContent = styled.div`
  padding: 5px 20px 5px 10px;
  width: 100%;
`;

export const TicketHeader = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: 100%;
`;

export const TicketTitle = styled.h4`
  ${({ theme }) => theme.typography.poppins_b};
  font-size: ${({ theme }) => theme.fontSize[18]};
  max-width: ${TicketTitleMaxWidthPercent}%;
  margin-bottom: 5px;
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
`;

export const TicketDate = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[16]};
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
`;

export const TicketPrice = styled.p`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

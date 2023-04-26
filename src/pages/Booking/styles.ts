import styled from "styled-components";

const BookingsWrapperMinH = 100;

export const BookingsWrapper = styled.div`
  min-height: ${BookingsWrapperMinH}vh;
  background: ${({ theme }) => theme.colors.backgroundColor}
  padding-top: 20px;
  transition: background-color ease-in 0.2s;
`;

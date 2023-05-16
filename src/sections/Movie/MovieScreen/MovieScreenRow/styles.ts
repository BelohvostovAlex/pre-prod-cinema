import styled from "styled-components";

const MovieScreenRowWrapperWidthPercent = 100;

export const MovieScreenRowWrapper = styled.tr`
  width: ${MovieScreenRowWrapperWidthPercent}%;
  display: flex;
  justify-content: center;
  td:nth-of-type(4) {
    margin-right: 50px;
  }
  &:first-of-type {
    td:nth-of-type(3) {
      margin-right: 50px;
    }
    td:nth-of-type(4) {
      margin-right: 6px;
    }
  }

  &:last-of-type {
    td:nth-of-type(3) {
      margin-right: 50px;
    }
    td:nth-of-type(4) {
      margin-right: 6px;
    }
  }
`;

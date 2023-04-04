import styled from "styled-components";

import { ButtonTypes } from "../../../../constants/buttons";
import { ButtonStyleProps } from "./interfaces";

export const StyledButton = styled.button<ButtonStyleProps>`
  ${({ theme, typography }) => theme.typography[typography]}
  font-size: ${({ fontSize }) => fontSize};
  background: ${({ theme, buttonType, backgroundColor }) =>
    buttonType === ButtonTypes.PRIMARY
      ? theme.colors.primary
      : buttonType === ButtonTypes.SECONDARY
      ? theme.colors.secondary
      : backgroundColor};
  color: ${({ theme, buttonType, color }) =>
    buttonType === ButtonTypes.PRIMARY
      ? theme.colors.secondary
      : buttonType === ButtonTypes.SECONDARY
      ? theme.colors.primary
      : color};
  border-radius: ${({ theme }) => theme.border_radius[10]};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0px"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  svg {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);
    width: 16px;
    height: auto;
  }
  padding: 6px 30px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.hover}
  }
`;

import { FunctionComponent } from "react";

import { RouterLinkProps } from "./interfaces";
import { StyledLink } from "./styles";
import { TypographyVariant } from "../../../constants/styles/typography";

const RouterLink: FunctionComponent<RouterLinkProps> = ({
  text,
  to,
  $active = false,
  typography = TypographyVariant.poppins_l,
  fontSize,
  extra,
  onClick,
}) => {
  const clickHandler = () => {
    if (onClick) onClick(to);
  };
  return (
    <StyledLink
      to={to}
      typography={typography}
      $active={$active}
      fontSize={fontSize}
      extra={extra}
      onClick={clickHandler}
    >
      {text}
    </StyledLink>
  );
};

export default RouterLink;

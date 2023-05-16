import { FunctionComponent } from "react";

import { TypographyVariant } from "../../constants/styles/typography";

import { RouterLinkProps } from "./interfaces";
import { StyledLink } from "./styles";

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

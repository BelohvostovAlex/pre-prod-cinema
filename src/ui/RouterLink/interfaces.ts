import { TypographyVariant } from "../../constants/styles/typography";

export interface RouterLinkProps {
  text: string;
  to: string;
  $active?: boolean;
  typography: TypographyVariant;
  fontSize?: string;
  extra?: string;

  onClick?: (to: string) => void;
}

export type StyledLinkProps = Omit<RouterLinkProps, "text" | "to">;

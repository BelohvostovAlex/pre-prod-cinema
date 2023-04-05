import { TypographyVariant } from "../../../constants/styles/typography";

export interface RouterLinkProps {
  text: string;
  to: string;
  $active?: boolean;
  typography: TypographyVariant;
  fontSize?: string;
  extra?: string;
}

export type StyledLinkProps = Omit<RouterLinkProps, "text" | "to">;

import { TypographyVariant } from "../../../constants/styles/typography";

export interface RouterLinkProps {
  text: string;
  to: string;
  $active?: boolean;
  typography: TypographyVariant;
  fontSize?: string;
  borderBottom?: boolean;
  extra?: string;
}

export type StyledLinkProps = Omit<RouterLinkProps, "text" | "to">;

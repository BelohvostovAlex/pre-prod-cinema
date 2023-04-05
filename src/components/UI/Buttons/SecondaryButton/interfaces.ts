import { TypographyVariant } from "../../../../constants/styles/typography";

export interface SecondaryButtonProps {
  onClick: () => void;
  text: string;
  fontSize?: string;
  extra?: string;
  typography: TypographyVariant;
}

export type StyledSecondaryButtonProps = Omit<
  SecondaryButtonProps,
  "onClick" | "text"
>;

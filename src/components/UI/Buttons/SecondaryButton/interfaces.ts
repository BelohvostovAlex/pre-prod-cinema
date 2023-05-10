import { TypographyVariant } from "../../../../constants/styles/typography";

export interface SecondaryButtonProps {
  text: string;
  fontSize?: string;
  extra?: string;
  typography: TypographyVariant;

  onClick: () => void;
}

export type StyledSecondaryButtonProps = Omit<
  SecondaryButtonProps,
  "onClick" | "text"
>;

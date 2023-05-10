import { TypographyVariant } from "../../../../constants/styles/typography";

export interface MovieInfoBlockProps {
  text: string;
  typography: TypographyVariant;
  title: string;
  extra?: string;
}

export type MovieInfoBlockWrapperProps = Pick<
  MovieInfoBlockProps,
  "extra" | "typography"
>;

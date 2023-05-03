export interface ChipProps {
  text: string;
  background?: string;
}

export type ChipWrapperProps = Pick<ChipProps, "background">;

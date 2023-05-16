export interface LoaderProps {
  width?: string;
  height?: string;
  color?: string;
}
export type LoaderWrapperProps = Omit<LoaderProps, "color">;
export type LoaderItemProps = Pick<LoaderProps, "color">;

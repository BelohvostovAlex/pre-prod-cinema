import "styled-components";
import { MergedTheme } from "./styles/theme/interfaces";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MergedTheme {}
}

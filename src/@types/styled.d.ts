import "styled-components";
import { MergedTheme } from "../styles/theme/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends MergedTheme {}
}

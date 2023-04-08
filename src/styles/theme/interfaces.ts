import { FlattenSimpleInterpolation } from "styled-components";

import { Colors } from "../../constants/styles/colors";
import { TThemeType } from "../../constants/styles/theme";

export interface ICommonTheme {
  typography: {
    poppins_r: FlattenSimpleInterpolation;
    poppins_sb: FlattenSimpleInterpolation;
    poppins_m: FlattenSimpleInterpolation;
    poppins_b: FlattenSimpleInterpolation;
    poppins_l: FlattenSimpleInterpolation;
    nunito_l: FlattenSimpleInterpolation;
    nunito_l_ital: FlattenSimpleInterpolation;
    nunito_r: FlattenSimpleInterpolation;
    nunito_b: FlattenSimpleInterpolation;
    inter_sb: FlattenSimpleInterpolation;
    inter_b: FlattenSimpleInterpolation;
    inter_r: FlattenSimpleInterpolation;
    inria_l_ital: FlattenSimpleInterpolation;
  };
  box_shadows: {
    main_content_inset: string;
  };
  border_radius: {
    8: string;
    9: string;
    10: string;
    18: string;
    20: string;
    40: string;
    circle: string;
  };
  fontSize: {
    8: string;
    10: string;
    12: string;
    14: string;
    16: string;
    18: string;
    21: string;
  };
  hover: string;
  colors: {
    extraDarkGray: Colors.EXTRA_DARK_GRAY;
    darkGray: Colors.DARK_GRAY;
    regularGray: Colors.REGULAR_GRAY;
    lightGray: Colors.LIGHT_GRAY;
    extraLightGray: Colors.EXTRA_LIGHT_GRAY;
    asphaltColor: Colors.ASPHALT_COLOR;
    wetAsphaltColor: Colors.WET_ASPHALT_COLOR;
    lightOrange: Colors.LIGHT_ORANGE;
    red: Colors.RED;
    white: Colors.WHITE;
    black: Colors.BLACK;
    green: Colors.GREEN;
    facebookColor: Colors.FACEBOOK;
  };
  zIndex: {
    1: string;
    10: string;
    100: string;
    1000: string;
  };
  padding: {
    drawer: string;
    header: string;
    modal: string;
  };
  margin: {
    mb10: string;
    mb14: string;
    mb20: string;
    mb30: string;
    mb50: string;
  };
  flexAlignCenter: string;
}

export interface ITheme {
  name: TThemeType;
  colors: {
    primary: Colors.BLACK | Colors.WHITE;
    secondary: Colors.ORANGE;
    backgroundColor: Colors.BG_DARK | Colors.BG_LIGHT;
  };
}

export type MergedTheme = ITheme & ICommonTheme;

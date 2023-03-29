import { FlattenSimpleInterpolation } from "styled-components";

import { Colors } from "../../constants/styles/colors";
import { TThemeType } from "../../constants/styles/theme";

export interface ICommonTheme {
  typography: {
    poppins_l_14: FlattenSimpleInterpolation;
    poppins_m_15: FlattenSimpleInterpolation;
    poppins_m_18: FlattenSimpleInterpolation;
    poppins_l_18: FlattenSimpleInterpolation;
    poppins_sb_20: FlattenSimpleInterpolation;
    poppins_r_20: FlattenSimpleInterpolation;
    poppins_b_21: FlattenSimpleInterpolation;
    poppins_l_21: FlattenSimpleInterpolation;
    poppins_b_23: FlattenSimpleInterpolation;
    poppins_r_23: FlattenSimpleInterpolation;
    poppins_l_24: FlattenSimpleInterpolation;
    poppins_r_24: FlattenSimpleInterpolation;
    poppins_b_26: FlattenSimpleInterpolation;
    poppins_sb_26: FlattenSimpleInterpolation;
    poppins_m_32: FlattenSimpleInterpolation;
    poppins_b_35: FlattenSimpleInterpolation;
    poppins_m_36: FlattenSimpleInterpolation;
    poppins_sb_36: FlattenSimpleInterpolation;
    poppins_l_40: FlattenSimpleInterpolation;
    poppins_m_42: FlattenSimpleInterpolation;
    poppins_b_48: FlattenSimpleInterpolation;
    poppins_l_48: FlattenSimpleInterpolation;
    poppins_l_55: FlattenSimpleInterpolation;
    nunito_l_16: FlattenSimpleInterpolation;
    nunito_l_ital_16: FlattenSimpleInterpolation;
    nunito_l_32: FlattenSimpleInterpolation;
    nunito_r_32: FlattenSimpleInterpolation;
    nunito_b_32: FlattenSimpleInterpolation;
    nunito_l_48: FlattenSimpleInterpolation;
    nunito_l_ital_48: FlattenSimpleInterpolation;
    nunito_r_48: FlattenSimpleInterpolation;
    nunito_b_48: FlattenSimpleInterpolation;
    inter_sb_14: FlattenSimpleInterpolation;
    inter_r_14: FlattenSimpleInterpolation;
    inter_b_16: FlattenSimpleInterpolation;
    inter_r_16: FlattenSimpleInterpolation;
    inria_l_ital_18: FlattenSimpleInterpolation;
    inria_l_ital_32: FlattenSimpleInterpolation;
    inria_l_ital_40: FlattenSimpleInterpolation;
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
  colors: {
    extraDarkGray: Colors.EXTRA_DARK_GRAY;
    darkGray: Colors.DARK_GRAY;
    regularGray: Colors.REGULAR_GRAY;
    lightGray: Colors.LIGHT_GRAY;
    extraLightGray: Colors.EXTRA_LIGHT_GRAY;
    asphaltColor: Colors.ASPHALT_COLOR;
    wetAsphaltColor: Colors.WET_ASPHALT_COLOR;
    lightOrange: Colors.LIGHT_ORANGE;
  };
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

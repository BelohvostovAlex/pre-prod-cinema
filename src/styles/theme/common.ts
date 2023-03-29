import { css } from "styled-components";
import { Colors } from "../../constants/styles/colors";

import { FontFamily, FontWeight } from "../../constants/styles/fonts";

const commonTheme = {
  typography: {
    poppins_l_14: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 14px;
      line-height: 21.2px;
    `,
    poppins_m_15: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
      font-size: 15px;
      line-height: 22.5px;
    `,
    poppins_m_18: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
      font-size: 18px;
      line-height: 26.86px;
    `,
    poppins_l_18: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 18px;
      line-height: 26.86px;
    `,
    poppins_sb_20: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.SEMI_BOLD};
      font-size: 20px;
      line-height: 30.29px;
    `,
    poppins_r_20: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.REGULAR};
      font-size: 20px;
      line-height: 30.29px;
    `,
    poppins_b_21: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.BOLD};
      font-size: 21px;
      line-height: 32px;
    `,
    poppins_l_21: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 21.49px;
      line-height: 32.24px;
    `,
    poppins_b_23: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.BOLD};
      font-size: 23px;
      line-height: 34.92px;
    `,
    poppins_r_23: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.REGULAR};
      font-size: 23px;
      line-height: 34.33px;
    `,
    poppins_l_24: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 24px;
      line-height: 36px;
    `,
    poppins_r_24: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.REGULAR};
      font-size: 24px;
      line-height: 36px;
    `,
    poppins_b_26: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.BOLD};
      font-size: 26.83px;
      line-height: 40.3px;
    `,
    poppins_sb_26: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.SEMI_BOLD};
      font-size: 26.83px;
      line-height: 40.3px;
    `,
    poppins_m_32: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
      font-size: 32px;
      line-height: 48px;
    `,
    poppins_b_35: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.BOLD};
      font-size: 35px;
      line-height: 52.81px;
    `,
    poppins_m_36: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
      font-size: 36px;
      line-height: 54px;
    `,
    poppins_sb_36: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
      font-size: 36px;
      line-height: 54px;
    `,
    poppins_l_40: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 40px;
      line-height: 60px;
    `,
    poppins_m_42: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
      font-size: 42px;
      line-height: 63px;
    `,
    poppins_b_48: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.BOLD};
      font-size: 48px;
      line-height: 72px;
    `,
    poppins_l_48: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 48px;
      line-height: 72px;
    `,
    poppins_l_55: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.REGULAR};
      font-size: 55px;
      line-height: 82.5px;
    `,
    nunito_l_16: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 16px;
      line-height: 21.82px;
    `,
    nunito_l_ital_16: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
      font-size: 16px;
      line-height: 21.82px;
    `,
    nunito_l_32: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 32px;
      line-height: 43.65px;
    `,
    nunito_r_32: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.REGULAR};
      font-size: 32px;
      line-height: 43.65px;
    `,
    nunito_b_32: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.BOLD};
      font-size: 32px;
      line-height: 43.65px;
    `,
    nunito_l_48: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-size: 48px;
      line-height: 65.47px;
    `,

    nunito_l_ital_48: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
      font-size: 48px;
      line-height: 65.47px;
    `,
    nunito_r_48: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.REGULAR};
      font-size: 48px;
      line-height: 65.47px;
    `,
    nunito_b_48: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.BOLD};
      font-size: 48px;
      line-height: 65.47px;
    `,
    inter_sb_14: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.SEMI_BOLD};
      font-size: 14px;
      line-height: 16.94px;
    `,
    inter_r_14: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.REGULAR};
      font-size: 14px;
      line-height: 20px;
    `,
    inter_b_16: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.BOLD};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1px;
    `,
    inter_r_16: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.REGULAR};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1px;
    `,
    inria_l_ital_18: css`
      font-family: ${FontFamily.INRIA_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
      font-size: 18px;
      line-height: 21.58px;
    `,
    inria_l_ital_32: css`
      font-family: ${FontFamily.INRIA_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
      font-size: 32px;
      line-height: 38.37px;
    `,
    inria_l_ital_40: css`
      font-family: ${FontFamily.INRIA_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
      font-size: 40px;
      line-height: 47.96px;
    `,
  },
  box_shadows: {
    main_content_inset:
      "inset 50px 50px 100px 20px #1E1F27, inset -50px -50px 100px #1E1F27;",
  },
  border_radius: {
    8: "8px",
    9: "9px",
    10: "10px",
    18: "18px",
    20: "20px",
    40: "40px",
    circle: "100%",
  },
  colors: {
    extraDarkGray: Colors.EXTRA_DARK_GRAY,
    darkGray: Colors.DARK_GRAY,
    regularGray: Colors.REGULAR_GRAY,
    lightGray: Colors.LIGHT_GRAY,
    extraLightGray: Colors.EXTRA_LIGHT_GRAY,
    asphaltColor: Colors.ASPHALT_COLOR,
    wetAsphaltColor: Colors.WET_ASPHALT_COLOR,
    lightOrange: Colors.LIGHT_ORANGE,
  },
};

export default commonTheme;

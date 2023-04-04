import { css } from "styled-components";

import { Colors } from "../../constants/styles/colors";
import { FontFamily, FontWeight } from "../../constants/styles/fonts";
import { ICommonTheme } from "./interfaces";

const commonTheme: ICommonTheme = {
  typography: {
    poppins_l: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.LIGHT};
    `,
    poppins_m: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.MEDIUM};
    `,
    poppins_sb: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.SEMI_BOLD};
    `,
    poppins_r: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.REGULAR};
    `,
    poppins_b: css`
      font-family: ${FontFamily.POPPINS};
      font-weight: ${FontWeight.BOLD};
    `,
    nunito_l: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
    `,
    nunito_l_ital: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
    `,
    nunito_r: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.REGULAR};
    `,
    nunito_b: css`
      font-family: ${FontFamily.NUNITO_SANS};
      font-weight: ${FontWeight.BOLD};
    `,
    inter_sb: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.SEMI_BOLD};
    `,
    inter_r: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.REGULAR};
    `,
    inter_b: css`
      font-family: ${FontFamily.INTER};
      font-weight: ${FontWeight.BOLD};
    `,
    inria_l_ital: css`
      font-family: ${FontFamily.INRIA_SANS};
      font-weight: ${FontWeight.LIGHT};
      font-style: italic;
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
  hover: "filter: brightness(90%)",
  colors: {
    extraDarkGray: Colors.EXTRA_DARK_GRAY,
    darkGray: Colors.DARK_GRAY,
    regularGray: Colors.REGULAR_GRAY,
    lightGray: Colors.LIGHT_GRAY,
    extraLightGray: Colors.EXTRA_LIGHT_GRAY,
    asphaltColor: Colors.ASPHALT_COLOR,
    wetAsphaltColor: Colors.WET_ASPHALT_COLOR,
    lightOrange: Colors.LIGHT_ORANGE,
    red: Colors.RED,
    green: Colors.GREEN,
  },
};

export default commonTheme;

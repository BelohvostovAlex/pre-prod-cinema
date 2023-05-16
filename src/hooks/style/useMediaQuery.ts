import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

type MediaQueries = "xs" | "s" | "sm" | "m" | "l" | "xl" | "xxl";

export const useMediaQuery = (mediaQuery: MediaQueries): boolean => {
  const { breakPoints } = useTheme();
  const mediaBreakPoints = {
    xs: `(max-width: ${breakPoints.xs}px)`,
    s: `(max-width: ${breakPoints.s}px)`,
    sm: `(max-width: ${breakPoints.sm}px)`,
    m: `(max-width: ${breakPoints.m}px)`,
    l: `(max-width: ${breakPoints.l}px)`,
    xl: `(max-width: ${breakPoints.xl}px)`,
    xxl: `(max-width: ${breakPoints.xxl}px)`,
  };

  const [isMediaMatch, setIsMediaMatch] = useState(
    window.matchMedia(mediaBreakPoints[mediaQuery]).matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaBreakPoints[mediaQuery]);
    const mqlHandler = () => setIsMediaMatch(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", mqlHandler);
    return () => {
      mediaQueryList.removeEventListener("change", mqlHandler);
    };
  }, [mediaQuery]);

  return isMediaMatch;
};

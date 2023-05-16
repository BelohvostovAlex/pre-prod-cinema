import { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

import { Colors } from "@constants/styles/colors";

const SliderSkeleton: FunctionComponent = (props) => (
  <ContentLoader
    speed={2}
    width={141}
    height={330}
    viewBox="0 0 141 330"
    backgroundColor={Colors.ASPHALT_COLOR}
    foregroundColor={Colors.LIGHT_GRAY}
    {...props}
  >
    <rect x="116" y="138" rx="0" ry="0" width="11" height="42" />
    <rect x="25" y="10" rx="0" ry="0" width="55" height="80" />
    <rect x="25" y="236" rx="0" ry="0" width="55" height="80" />
    <rect x="15" y="105" rx="0" ry="0" width="75" height="110" />
  </ContentLoader>
);

export default SliderSkeleton;

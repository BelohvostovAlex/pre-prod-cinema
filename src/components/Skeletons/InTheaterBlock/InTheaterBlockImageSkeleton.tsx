import { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

import { Colors } from "../../../constants/styles/colors";

const InTheaterBlockImageSkeleton: FunctionComponent = (props) => (
  <ContentLoader
    speed={2}
    width={215}
    height={300}
    viewBox="0 0 215 300"
    backgroundColor={Colors.ASPHALT_COLOR}
    foregroundColor={Colors.LIGHT_GRAY}
    {...props}
  >
    <rect x="26" y="3" rx="0" ry="0" width="135" height="200" />
    <rect x="5" y="214" rx="0" ry="0" width="188" height="46" />
    <rect x="20" y="276" rx="0" ry="0" width="39" height="20" />
    <rect x="69" y="276" rx="0" ry="0" width="45" height="20" />
    <rect x="125" y="275" rx="0" ry="0" width="45" height="20" />
  </ContentLoader>
);

export default InTheaterBlockImageSkeleton;

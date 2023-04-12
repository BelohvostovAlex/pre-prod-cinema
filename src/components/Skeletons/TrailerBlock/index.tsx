import { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

import { Colors } from "../../../constants/styles/colors";

const TrailerBlockSkeleton: FunctionComponent = (props) => (
  <ContentLoader
    speed={2}
    width={510}
    height={260}
    viewBox="0 0 510 260"
    backgroundColor={Colors.ASPHALT_COLOR}
    foregroundColor={Colors.LIGHT_GRAY}
    {...props}
  >
    <rect x="-2" y="0" rx="0" ry="0" width="510" height="306" />
  </ContentLoader>
);

export default TrailerBlockSkeleton;

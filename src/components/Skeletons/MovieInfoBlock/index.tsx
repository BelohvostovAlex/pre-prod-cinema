import { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

import { Colors } from "@constants/styles/colors";

const MovieInfoBlockSkeleton: FunctionComponent = (props) => (
  <ContentLoader
    speed={2}
    width={411}
    height={164}
    viewBox="0 0 411 164"
    backgroundColor={Colors.ASPHALT_COLOR}
    foregroundColor={Colors.LIGHT_GRAY}
    {...props}
  >
    <rect x="1" y="0" rx="0" ry="0" width="415" height="55" />
    <rect x="1" y="84" rx="0" ry="0" width="418" height="98" />
  </ContentLoader>
);

export default MovieInfoBlockSkeleton;

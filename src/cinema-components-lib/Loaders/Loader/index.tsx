import { FunctionComponent } from "react";

import { LoaderProps } from "./interfaces";
import { LoaderItem, LoaderWrapper } from "./styles";

const Loader: FunctionComponent<LoaderProps> = ({ color, height, width }) => {
  return (
    <LoaderWrapper height={height} width={width}>
      {Array.from({ length: 12 }).map((_, idx) => (
        <LoaderItem key={idx} color={color} />
      ))}
    </LoaderWrapper>
  );
};

export default Loader;

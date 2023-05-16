import { FunctionComponent } from "react";

import { LoaderItem, LoaderWrapper } from "./styles";
import { LoaderProps } from "./interfaces";

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

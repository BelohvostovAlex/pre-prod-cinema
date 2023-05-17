import { FunctionComponent } from "react";

import { InlineLoaderProps } from "./interfaces";
import { LoaderItem, LoaderWrapper } from "./styles";

const InlineLoader: FunctionComponent<InlineLoaderProps> = ({ color }) => {
  return (
    <LoaderWrapper>
      {Array.from({ length: 4 }).map((_, idx) => (
        <LoaderItem key={idx} color={color} />
      ))}
    </LoaderWrapper>
  );
};

export default InlineLoader;

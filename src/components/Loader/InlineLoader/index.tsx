import { FunctionComponent } from "react";

import { LoaderItem, LoaderWrapper } from "./styles";
import { InlineLoaderProps } from "./interfaces";

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

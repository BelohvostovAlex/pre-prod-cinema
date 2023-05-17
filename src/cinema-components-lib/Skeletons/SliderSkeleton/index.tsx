import { FunctionComponent } from "react";

import { Box, Controls, Item, ItemsWrapper } from "./styles";

const SliderSkeleton: FunctionComponent = () => {
  return (
    <Box>
      <ItemsWrapper>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Item key={idx} />
        ))}
      </ItemsWrapper>
      <Controls />
    </Box>
  );
};

export default SliderSkeleton;

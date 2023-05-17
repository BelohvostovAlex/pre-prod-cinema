import { FunctionComponent } from "react";

import { Box, Chip, ChipWrapper, Img, Title } from "./styles";

const InTheaterBlockImageSkeleton: FunctionComponent = () => {
  return (
    <Box>
      <Img />
      <Title />
      <ChipWrapper>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Chip key={idx} />
        ))}
      </ChipWrapper>
    </Box>
  );
};

export default InTheaterBlockImageSkeleton;

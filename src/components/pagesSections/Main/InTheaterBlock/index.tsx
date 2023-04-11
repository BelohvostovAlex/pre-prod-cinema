import { FunctionComponent } from "react";

import MovieInfoBlock from "../MovieInfoBlock";
import Slider from "../../../Slider";
import Chip from "../../../Chip";
import { TypographyVariant } from "../../../../constants/styles/typography";

import {
  InTheaterBlockWrapper,
  InTheaterImg,
  InTheaterImgWrapper,
  InTheterImgTitle,
  SliderBox,
  TagsWrapper,
} from "./styles";
import { InTheaterBlockProps } from "./interfaces";

const InTheaterBlock: FunctionComponent<InTheaterBlockProps> = ({
  text,
  title,
  img,
  data,
  genres,
}) => {
  return (
    <InTheaterBlockWrapper>
      <MovieInfoBlock
        typography={TypographyVariant.inria_l_ital}
        text={text}
        title={title}
      />
      <InTheaterImgWrapper>
        <InTheaterImg src={img} />
        <InTheterImgTitle>{title}</InTheterImgTitle>
        <TagsWrapper>
          {genres && genres.map((genre) => <Chip text={genre} key={genre} />)}
        </TagsWrapper>
      </InTheaterImgWrapper>
      <SliderBox>
        <Slider data={data} />
      </SliderBox>
    </InTheaterBlockWrapper>
  );
};

export default InTheaterBlock;

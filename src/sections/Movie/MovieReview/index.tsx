import { FunctionComponent, useState } from "react";

import ArrowDownIcon from "@assets/svg/tools/arrow-down.svg";
import ArrowUpIcon from "@assets/svg/tools/arrow-up.svg";
import RoundButton from "@ui/Buttons/RoundButton";

import { readMoreRoundBtnExtraStyles, textLimit } from "./config";
import { handleReviewText } from "./config/handleReviewText";
import { useReviewText } from "./hooks/useReviewText";
import { ReviewProps } from "./interface";
import {
  ReadMoreTitle,
  ReadMoreWrapper,
  ReviewFrom,
  ReviewInfo,
  ReviewText,
  ReviewTitle,
  ReviewWrapper,
} from "./styles";

const MovieReview: FunctionComponent<ReviewProps> = ({ author, text }) => {
  const { from, readMore, title, hide } = useReviewText();
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);

  const onReadMoreClick = () => {
    setIsMoreOpen((prev) => !prev);
  };
  return (
    <ReviewWrapper>
      <ReviewInfo>
        <ReviewTitle>{title}</ReviewTitle>
        <ReviewFrom>
          {from} {author}
        </ReviewFrom>
        <ReviewText isOpen={isMoreOpen}>
          {isMoreOpen ? text : handleReviewText(text, textLimit)}
        </ReviewText>
      </ReviewInfo>
      <ReadMoreWrapper>
        <ReadMoreTitle onClick={onReadMoreClick}>
          {isMoreOpen ? hide : readMore}
        </ReadMoreTitle>
        <RoundButton
          onClick={onReadMoreClick}
          extra={readMoreRoundBtnExtraStyles}
        >
          {isMoreOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </RoundButton>
      </ReadMoreWrapper>
    </ReviewWrapper>
  );
};

export default MovieReview;

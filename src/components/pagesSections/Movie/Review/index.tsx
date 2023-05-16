import { FunctionComponent, useState } from "react";

import RoundButton from "../../../UI/Buttons/RoundButton";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/svg/tools/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../../assets/svg/tools/arrow-up.svg";

import { useReviewText } from "./hooks/useReviewText";
import {
  ReadMoreTitle,
  ReadMoreWrapper,
  ReviewFrom,
  ReviewInfo,
  ReviewText,
  ReviewTitle,
  ReviewWrapper,
} from "./styles";
import { ReviewProps } from "./interface";
import { readMoreRoundBtnExtraStyles, textLimit } from "./config";
import { handleReviewText } from "./config/handleReviewText";

const Review: FunctionComponent<ReviewProps> = ({ author, text }) => {
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

export default Review;

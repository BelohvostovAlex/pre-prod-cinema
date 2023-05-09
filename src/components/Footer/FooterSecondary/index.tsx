import { FunctionComponent } from "react";

import { ReactComponent as DcIcon } from "@assets/svg/companies/dc.svg";
import { ReactComponent as MarvelIcon } from "@assets/svg/companies/marvel.svg";
import { ReactComponent as NetflixIcon } from "@assets/svg/companies/netflix.svg";
import { ReactComponent as ParamountIcon } from "@assets/svg/companies/paramount.svg";
import { ReactComponent as SonyIcon } from "@assets/svg/companies/sony.svg";
import { ReactComponent as WaltIcon } from "@assets/svg/companies/walt.svg";
import { ReactComponent as WarnerIcon } from "@assets/svg/companies/warner.svg";
import { footerSecondaryYear } from "@constants/footer";

import {
  FooterSecondaryItemsWrapper,
  FooterSecondaryWrapper,
  FooterSecondaryYear,
} from "./styles";

const FooterSecondary: FunctionComponent = () => {
  return (
    <FooterSecondaryWrapper>
      <FooterSecondaryItemsWrapper>
        <ParamountIcon />
        <MarvelIcon />
        <DcIcon />
        <WarnerIcon />
        <NetflixIcon />
        <WaltIcon />
        <SonyIcon />
      </FooterSecondaryItemsWrapper>
      <FooterSecondaryYear>{footerSecondaryYear}</FooterSecondaryYear>
    </FooterSecondaryWrapper>
  );
};

export default FooterSecondary;

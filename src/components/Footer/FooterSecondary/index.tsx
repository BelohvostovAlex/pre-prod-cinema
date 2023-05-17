import { FunctionComponent } from "react";

import DcIcon from "@assets/svg/companies/dc.svg";
import MarvelIcon from "@assets/svg/companies/marvel.svg";
import NetflixIcon from "@assets/svg/companies/netflix.svg";
import ParamountIcon from "@assets/svg/companies/paramount.svg";
import SonyIcon from "@assets/svg/companies/sony.svg";
import WaltIcon from "@assets/svg/companies/walt.svg";
import WarnerIcon from "@assets/svg/companies/warner.svg";
import { footerSecondaryYear } from "@constants/footer";

import {
  FooterSecondaryItemsWrapper,
  FooterSecondaryWrapper,
  FooterSecondaryYear,
} from "./styles";

const icons = [
  { Icon: ParamountIcon, title: "Paramount" },
  { Icon: MarvelIcon, title: "Marvel" },
  { Icon: DcIcon, title: "DC" },
  { Icon: WarnerIcon, title: "Warner" },
  { Icon: NetflixIcon, title: "Netflix" },
  { Icon: WaltIcon, title: "Walt" },
  { Icon: SonyIcon, title: "Sony" },
];

const FooterSecondary: FunctionComponent = () => {
  return (
    <FooterSecondaryWrapper>
      <FooterSecondaryItemsWrapper>
        {icons.map(({ Icon, title }, idx) => (
          <Icon key={idx} title={title} />
        ))}
      </FooterSecondaryItemsWrapper>
      <FooterSecondaryYear>{footerSecondaryYear}</FooterSecondaryYear>
    </FooterSecondaryWrapper>
  );
};

export default FooterSecondary;

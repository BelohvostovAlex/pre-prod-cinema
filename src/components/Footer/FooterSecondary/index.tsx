import { FunctionComponent } from "react";

import { footerSecondaryYear } from "../../../constants/footer";
import { ReactComponent as DcIcon } from "../../../assets/svg/companies/dc.svg";
import { ReactComponent as MarvelIcon } from "../../../assets/svg/companies/marvel.svg";
import { ReactComponent as NetflixIcon } from "../../../assets/svg/companies/netflix.svg";
import { ReactComponent as ParamountIcon } from "../../../assets/svg/companies/paramount.svg";
import { ReactComponent as SonyIcon } from "../../../assets/svg/companies/sony.svg";
import { ReactComponent as WarnerIcon } from "../../../assets/svg/companies/warner.svg";
import { ReactComponent as WaltIcon } from "../../../assets/svg/companies/walt.svg";

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

import { FunctionComponent } from "react";

import RightArrowIcon from "@assets/svg/tools/right.svg";

import { useDrawerText } from "./hooks/useDrawerText";
import { DrawerProps } from "./interfaces";
import { DrawerArrowWrapper, DrawerTitle, StyledDrawer } from "./styles";

const Drawer: FunctionComponent<DrawerProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  const { closeTitle } = useDrawerText();
  return (
    <StyledDrawer isOpen={isOpen}>
      <DrawerTitle>
        <DrawerArrowWrapper>
          <RightArrowIcon onClick={onClose} title={closeTitle} />
        </DrawerArrowWrapper>
        {title}
      </DrawerTitle>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;

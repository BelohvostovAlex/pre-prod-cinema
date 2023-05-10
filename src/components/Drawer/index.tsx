import { FunctionComponent } from "react";

import { ReactComponent as RightArrowIcon } from "../../assets/svg/tools/right.svg";

import { DrawerProps } from "./interfaces";
import { DrawerArrowWrapper, DrawerTitle, StyledDrawer } from "./styles";

const Drawer: FunctionComponent<DrawerProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  return (
    <StyledDrawer isOpen={isOpen}>
      <DrawerTitle>
        <DrawerArrowWrapper>
          <RightArrowIcon onClick={onClose} />
        </DrawerArrowWrapper>
        {title}
      </DrawerTitle>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;

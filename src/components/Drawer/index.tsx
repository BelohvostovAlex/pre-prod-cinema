import { FunctionComponent } from "react";

import { ReactComponent as RightArrowIcon } from "../../assets/svg/tools/right.svg";
import { DrawerArrowWrapper, DrawerTitle, StyledDrawer } from "./styles";
import { DrawerProps } from "./interfaces";

const Drawer: FunctionComponent<DrawerProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <StyledDrawer>
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

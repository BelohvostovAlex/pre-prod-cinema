import { FunctionComponent } from "react";
import { Button, RoundButton } from "cinema-ui-belohvostov";
import { useTheme } from "styled-components";

import { useMediaQuery } from "../../../hooks/style/useMediaQuery";
import { Colors } from "../../../constants/styles/colors";
import { ButtonVariants } from "../../../constants/buttons";
import { ReactComponent as SignInIcon } from "../../../assets/svg/tools/sign-in.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/svg/tools/settings.svg";
import { TypographyVariant } from "../../../constants/styles/typography";
import { useHeaderText } from "../hooks/useHeaderText";
import Modal from "../../Modal";
import Settings from "../../Settings";
import { usePortal } from "../../../hooks/portal/usePortal";

import { HeaderButtonGroup } from "./styles";
import { onOpenSignInModalMargin, roundBtnExtra } from "./config";
import { HeaderButtonsGroupProps } from "./interfaces";

const HeaderButtonsGroup: FunctionComponent<HeaderButtonsGroupProps> = ({
  handleAuthPortalOpen,
  setIsSignUp,
}) => {
  const { signInBtn, signUpBtn, settingsTitle } = useHeaderText();
  const { fontSize } = useTheme();
  const isLSize = useMediaQuery("l");
  const [isSettingsPortalOpen, handleSettingsPortalOpen] = usePortal();

  const onOpenSignUpModal = () => {
    handleAuthPortalOpen();
    setIsSignUp(true);
  };
  const onOpenSignInModal = () => {
    handleAuthPortalOpen();
    setIsSignUp(false);
  };
  return (
    <>
      <HeaderButtonGroup>
        {isLSize ? (
          <RoundButton
            onClick={handleAuthPortalOpen}
            children={<SignInIcon title={signInBtn} />}
            extra={roundBtnExtra}
            background={Colors.DARK_GRAY}
          />
        ) : (
          <>
            <Button
              typography={TypographyVariant.poppins_l}
              variant={ButtonVariants.SECONDARY}
              fontSize={fontSize[14]}
              onClick={onOpenSignUpModal}
            >
              {signUpBtn}
            </Button>
            <Button
              typography={TypographyVariant.poppins_l}
              variant={ButtonVariants.PRIMARY}
              margin={onOpenSignInModalMargin}
              fontSize={fontSize[14]}
              onClick={onOpenSignInModal}
            >
              {signInBtn}
            </Button>
          </>
        )}
        <SettingsIcon
          onClick={handleSettingsPortalOpen}
          title={settingsTitle}
        />
      </HeaderButtonGroup>
      <Modal onClose={handleSettingsPortalOpen} isOpen={isSettingsPortalOpen}>
        <Settings />
      </Modal>
    </>
  );
};

export default HeaderButtonsGroup;

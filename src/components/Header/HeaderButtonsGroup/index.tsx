import { FunctionComponent } from "react";

import { RoundButton } from "cinema-ui-belohvostov";
import { useTheme } from "styled-components";

import Button from "@/ui/Buttons/Button";
import SettingsIcon from "@assets/svg/tools/settings.svg";
import SignInIcon from "@assets/svg/tools/sign-in.svg";
import Modal from "@components/Modal";
import Settings from "@components/Settings";
import { ButtonVariants } from "@constants/buttons";
import { Colors } from "@constants/styles/colors";
import { TypographyVariant } from "@constants/styles/typography";
import { usePortal } from "@hooks/portal/usePortal";
import { useMediaQuery } from "@hooks/style/useMediaQuery";

import { useHeaderText } from "../hooks/useHeaderText";

import { onOpenSignInModalMargin, roundBtnExtra } from "./config";
import { HeaderButtonsGroupProps } from "./interfaces";
import { HeaderButtonGroup } from "./styles";

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
      <HeaderButtonGroup data-cy="header-button-group">
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
              data-cy="sign-up"
            >
              {signUpBtn}
            </Button>
            <Button
              typography={TypographyVariant.poppins_l}
              variant={ButtonVariants.PRIMARY}
              margin={onOpenSignInModalMargin}
              fontSize={fontSize[14]}
              onClick={onOpenSignInModal}
              data-cy="sign-in"
            >
              {signInBtn}
            </Button>
          </>
        )}
        <SettingsIcon
          onClick={handleSettingsPortalOpen}
          title={settingsTitle}
          data-cy="settings-button"
        />
      </HeaderButtonGroup>
      <Modal onClose={handleSettingsPortalOpen} isOpen={isSettingsPortalOpen}>
        <Settings />
      </Modal>
    </>
  );
};

export default HeaderButtonsGroup;

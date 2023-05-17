import { FunctionComponent } from "react";

import {
  FacebookButton,
  GithubButton,
  GoogleButton,
} from "cinema-ui-belohvostov";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "styled-components";

import ProfileIcon from "@assets/svg/form/account.svg";
import EmailIcon from "@assets/svg/form/email.svg";
import PasswordIcon from "@assets/svg/form/password.svg";
import SurnamIcon from "@assets/svg/form/surname.svg";
import { InputTypes } from "@components/Input/interfaces";
import InputWithIcon from "@components/InputWithIcon";
import ModalTitle from "@components/Modal/ModalTitle";
import PasswordStrengthMeter from "@components/PasswordStrengthMeter";
import { AuthFormInputsPossibleNames } from "@constants/authForm";
import { ButtonVariants } from "@constants/buttons";
import { Colors } from "@constants/styles/colors";
import { TypographyVariant } from "@constants/styles/typography";
import { useAuthBySocialNetwork } from "@hooks/auth/authBySocial/useAuthBySocialNetworks";
import { useAppSelector } from "@hooks/useAppSelector";
import { userLoadingSelector } from "@store/slices/userSlice/selectors";
import Button from "@ui/Buttons/Button";
import InlineLoader from "cinema-components-lib/Loaders/InlineLoader";

import {
  lastSocialBtnMargin,
  signInBtnWidth,
  signUpBtnWidth,
  socialBtnHeight,
  socialBtnWidth,
} from "./config";
import { useAuthFormText } from "./hooks/useAuthFormText";
import { useValidationWithTranslate } from "./hooks/useValidationWithTranslate";
import { AuthFormInputProps, AuthFormProps } from "./interfaces";
import {
  BottomInfoWrapper,
  ButtonGroup,
  Form,
  Link,
  Typography,
} from "./styles";

const AuthForm: FunctionComponent<AuthFormProps> = ({
  signUp = true,
  onFormTypeChange,
  onSubmit,
  handlePortal,
}) => {
  const {
    title,
    titleSpan,
    usernameText,
    surnameText,
    emailText,
    passwordText,
    alreadyHaveAcc,
    linkToSignIn,
    googleBtn,
    facebookBtn,
    githubrBtn,
    linkToSignUp,
    needAcc,
    signInBtn,
    signUpBtn,
  } = useAuthFormText(signUp);
  const isLoading = useAppSelector(userLoadingSelector);
  const { fontSize } = useTheme();
  const handleValidationType = useValidationWithTranslate();

  const googleSignIn = useAuthBySocialNetwork({
    ClassProvider: GoogleAuthProvider,
    provider: new GoogleAuthProvider(),
    handlePortal,
  });
  const facebookSignIn = useAuthBySocialNetwork({
    ClassProvider: FacebookAuthProvider,
    provider: new FacebookAuthProvider(),
    handlePortal,
  });
  const githubSignIn = useAuthBySocialNetwork({
    ClassProvider: GithubAuthProvider,
    provider: new GithubAuthProvider(),
    handlePortal,
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, errors },
  } = useForm<AuthFormInputProps>({ mode: "onChange" });

  const onSubmitHandler: SubmitHandler<AuthFormInputProps> = (data) => {
    if (isValid) {
      onSubmit(data);
      reset();
    }
  };

  return (
    <>
      <ModalTitle text={title} spanText={titleSpan} />
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {signUp && (
          <>
            <InputWithIcon
              id={AuthFormInputsPossibleNames.USERNAME}
              placeholder={usernameText.placeholder}
              icon={<ProfileIcon title={usernameText.label} />}
              register={register}
              inputName={AuthFormInputsPossibleNames.USERNAME}
              validateOptions={handleValidationType(
                AuthFormInputsPossibleNames.USERNAME,
              )}
              error={errors.username?.message}
            />
            <InputWithIcon
              id={AuthFormInputsPossibleNames.SURNAME}
              placeholder={surnameText.placeholder}
              icon={<SurnamIcon title={surnameText.label} />}
              register={register}
              inputName={AuthFormInputsPossibleNames.SURNAME}
              validateOptions={handleValidationType(
                AuthFormInputsPossibleNames.SURNAME,
              )}
              error={errors.surname?.message}
            />
          </>
        )}
        <InputWithIcon
          type={InputTypes.EMAIL}
          id={AuthFormInputsPossibleNames.EMAIL}
          placeholder={emailText.placeholder}
          icon={<EmailIcon title={emailText.label} />}
          register={register}
          inputName={AuthFormInputsPossibleNames.EMAIL}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.EMAIL,
          )}
          error={errors.email?.message}
        />
        <InputWithIcon
          type={InputTypes.PASSWORD}
          id={AuthFormInputsPossibleNames.PASSWORD}
          placeholder={passwordText.placeholder}
          icon={<PasswordIcon title={passwordText.label} />}
          register={register}
          inputName={AuthFormInputsPossibleNames.PASSWORD}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.PASSWORD,
          )}
          error={errors.password?.message}
        />
        <PasswordStrengthMeter value={watch().password} />
        {signUp ? (
          <Button
            variant={ButtonVariants.PRIMARY}
            typography={TypographyVariant.poppins_l}
            width={signUpBtnWidth}
            type="submit"
          >
            {signUpBtn}
          </Button>
        ) : (
          <Button
            variant={ButtonVariants.PRIMARY}
            typography={TypographyVariant.poppins_l}
            type="submit"
            width={signInBtnWidth}
          >
            {signInBtn}
          </Button>
        )}
        {isLoading && <InlineLoader />}
      </Form>
      <ButtonGroup>
        <GoogleButton
          typography={TypographyVariant.inter_sb}
          width={socialBtnWidth}
          height={socialBtnHeight}
          fontSize={fontSize[8]}
          backgroundColor={Colors.WHITE}
          color={Colors.BLACK}
          onClick={googleSignIn}
          children={googleBtn}
        />
        <FacebookButton
          typography={TypographyVariant.inter_sb}
          width={socialBtnWidth}
          height={socialBtnHeight}
          fontSize={fontSize[8]}
          backgroundColor={Colors.FACEBOOK}
          color={Colors.WHITE}
          onClick={facebookSignIn}
          children={facebookBtn}
        />
        <GithubButton
          typography={TypographyVariant.inter_sb}
          width={socialBtnWidth}
          height={socialBtnHeight}
          fontSize={fontSize[8]}
          backgroundColor={Colors.BLACK}
          color={Colors.WHITE}
          margin={lastSocialBtnMargin}
          onClick={githubSignIn}
          children={githubrBtn}
        />
      </ButtonGroup>
      <BottomInfoWrapper>
        <Typography>{signUp ? alreadyHaveAcc : needAcc}</Typography>
        <Link onClick={onFormTypeChange}>
          {signUp ? linkToSignIn : linkToSignUp}
        </Link>
      </BottomInfoWrapper>
    </>
  );
};

export default AuthForm;

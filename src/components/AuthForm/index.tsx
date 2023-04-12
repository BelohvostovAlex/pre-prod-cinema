import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "styled-components";

import { ReactComponent as ProfileIcon } from "../../assets/svg/form/account.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/form/email.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form/password.svg";
import { ReactComponent as SurnamIcon } from "../../assets/svg/form/surname.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/social/facebook.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/social/github.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/social/google.svg";
import { AuthFormInputsPossibleNames } from "../../constants/authForm";
import { ButtonTypes, ButtonVariants } from "../../constants/buttons";
import { Colors } from "../../constants/styles/colors";
import { TypographyVariant } from "../../constants/styles/typography";
import { useAuthBySocialNetwork } from "../../hooks/authBySocial/useAuthBySocialNetworks";
import { InputTypes } from "../Input/interfaces";
import InputWithIcon from "../InputWithIcon";
import ModalTitle from "../Modal/ModalTitle";
import PasswordStrengthMeter from "../PasswordStrengthMeter";
import Button from "../UI/Buttons/Button";

import {
  BottomInfoWrapper,
  ButtonGroup,
  Form,
  Link,
  Typography,
} from "./styles";
import { AuthFormInputProps, AuthFormProps } from "./interfaces";
import { useAuthFormText } from "./config/useAuthFormText";
import { useValidationWithTranslate } from "./config/validation";
import {
  lastSocialBtnMargin,
  signInBtnWidth,
  signUpBtnWidth,
  socialBtnHeight,
  socialBtnWidth,
} from "./config";

const AuthForm: FunctionComponent<AuthFormProps> = ({
  signUp = true,
  onFormTypeChange,
  onSubmit,
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
  const { fontSize } = useTheme();
  const handleValidationType = useValidationWithTranslate();

  const googleSignIn = useAuthBySocialNetwork({
    ClassProvider: GoogleAuthProvider,
    provider: new GoogleAuthProvider(),
  });
  const facebookSignIn = useAuthBySocialNetwork({
    ClassProvider: FacebookAuthProvider,
    provider: new FacebookAuthProvider(),
  });
  const githubSignIn = useAuthBySocialNetwork({
    ClassProvider: GithubAuthProvider,
    provider: new GithubAuthProvider(),
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
    <div>
      <ModalTitle text={title} spanText={titleSpan} />
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {signUp && (
          <>
            <InputWithIcon
              id={AuthFormInputsPossibleNames.USERNAME}
              placeholder={usernameText.placeholder}
              icon={<ProfileIcon />}
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
              icon={<SurnamIcon />}
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
          icon={<EmailIcon />}
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
          icon={<PasswordIcon />}
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
            buttonTypes={ButtonTypes.SUBMIT}
            width={signUpBtnWidth}
          >
            {signUpBtn}
          </Button>
        ) : (
          <Button
            variant={ButtonVariants.PRIMARY}
            typography={TypographyVariant.poppins_l}
            buttonTypes={ButtonTypes.SUBMIT}
            width={signInBtnWidth}
          >
            {signInBtn}
          </Button>
        )}
      </Form>
      <ButtonGroup>
        <Button
          typography={TypographyVariant.inter_sb}
          width={socialBtnWidth}
          height={socialBtnHeight}
          fontSize={fontSize[8]}
          backgroundColor={Colors.WHITE}
          color={Colors.BLACK}
          onClick={googleSignIn}
        >
          <GoogleIcon />
          {googleBtn}
        </Button>
        <Button
          typography={TypographyVariant.inter_sb}
          width={socialBtnWidth}
          height={socialBtnHeight}
          fontSize={fontSize[8]}
          backgroundColor={Colors.FACEBOOK}
          color={Colors.WHITE}
          onClick={facebookSignIn}
        >
          <FacebookIcon />
          {facebookBtn}
        </Button>
        <Button
          typography={TypographyVariant.inter_sb}
          width={socialBtnWidth}
          height={socialBtnHeight}
          fontSize={fontSize[8]}
          backgroundColor={Colors.BLACK}
          color={Colors.WHITE}
          margin={lastSocialBtnMargin}
          onClick={githubSignIn}
        >
          <GithubIcon />
          {githubrBtn}
        </Button>
      </ButtonGroup>
      <BottomInfoWrapper>
        <Typography>{signUp ? alreadyHaveAcc : needAcc}</Typography>
        <Link onClick={onFormTypeChange}>
          {signUp ? linkToSignIn : linkToSignUp}
        </Link>
      </BottomInfoWrapper>
    </div>
  );
};

export default AuthForm;

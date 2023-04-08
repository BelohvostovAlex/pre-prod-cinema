import { FunctionComponent } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAuthFormText } from "./config/useAuthFormText";
import { handleValidationType } from "./config/validation";
import { AuthFormInputProps, AuthFormProps } from "./interfaces";
import {
  BottomInfoWrapper,
  ButtonGroup,
  Form,
  Link,
  Typography,
} from "./styles";
import Button from "../UI/Buttons/Button";
import ModalTitle from "../Modal/ModalTitle";
import InputWithIcon from "../InputWithIcon";
import PasswordStrengthMeter from "../PasswordStrengthMeter";

import { useAuthBySocialNetwork } from "../../hooks/authBySocial/useAuthBySocialNetworks";
import { AuthFormInputsPossibleNames } from "../../constants/authForm";

import { TypographyVariant } from "../../constants/styles/typography";
import { Colors } from "../../constants/styles/colors";
import { ButtonTypes, ButtonVariants } from "../../constants/buttons";
import { ReactComponent as ProfileIcon } from "../../assets/svg/form/account.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/form/email.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form/password.svg";
import { ReactComponent as SurnamIcon } from "../../assets/svg/form/surname.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/social/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/social/facebook.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/social/github.svg";
import { InputTypes } from "../Input/interfaces";
import { useTheme } from "styled-components";

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
              id="username"
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
              id="surname"
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
          id="email"
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
          id="password"
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
          >
            {signUpBtn}
          </Button>
        ) : (
          <Button
            variant={ButtonVariants.PRIMARY}
            typography={TypographyVariant.poppins_l}
            buttonTypes={ButtonTypes.SUBMIT}
          >
            {signInBtn}
          </Button>
        )}
      </Form>
      <ButtonGroup>
        <Button
          typography={TypographyVariant.inter_sb}
          width="174px"
          height="28px"
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
          width="174px"
          height="28px"
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
          width="174px"
          height="28px"
          fontSize={fontSize[8]}
          backgroundColor={Colors.BLACK}
          color={Colors.WHITE}
          margin="10px 0px"
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

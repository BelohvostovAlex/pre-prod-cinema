import { FunctionComponent } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import Button from "../UI/Buttons/Button";
import ModalTitle from "../Modal/ModalTitle";

import { useAuthBySocialNetwork } from "../../hooks/authBySocial/useAuthBySocialNetworks";
import { useAuthFormText } from "./config/useAuthFormText";

import { TypographyVariant } from "../../constants/styles/typography";
import { ButtonTypes, ButtonVariants } from "../../constants/buttons";
import { ReactComponent as ProfileIcon } from "../../assets/svg/form/account.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/form/email.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form/password.svg";
import { ReactComponent as SurnamIcon } from "../../assets/svg/form/surname.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/social/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/social/facebook.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/social/github.svg";
import { AuthFormInputProps, AuthFormProps } from "./interfaces";
import {
  BottomInfoWrapper,
  ButtonGroup,
  Form,
  Link,
  Typography,
} from "./styles";
import InputWithIcon from "../InputWithIcon";
import { InputTypes } from "../Input/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthFormInputsPossibleNames } from "../../constants/authForm";
import { handleValidationType } from "./config/validation";

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
    formState: { isValid },
  } = useForm<AuthFormInputProps>({ mode: "onBlur" });

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
        />
        {signUp ? (
          <Button
            variant={ButtonVariants.PRIMARY}
            typography={TypographyVariant.poppins_l}
            width="100%"
            buttonTypes={ButtonTypes.SUBMIT}
          >
            {signUpBtn}
          </Button>
        ) : (
          <Button
            variant={ButtonVariants.PRIMARY}
            typography={TypographyVariant.poppins_l}
            width="100%"
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
          fontSize="8px"
          backgroundColor="#ffff"
          color="black"
          onClick={googleSignIn}
        >
          <GoogleIcon />
          {googleBtn}
        </Button>
        <Button
          typography={TypographyVariant.inter_sb}
          width="174px"
          height="28px"
          fontSize="8px"
          backgroundColor="#1877F2"
          color="#fff"
          onClick={facebookSignIn}
        >
          <FacebookIcon />
          {facebookBtn}
        </Button>
        <Button
          typography={TypographyVariant.inter_sb}
          width="174px"
          height="28px"
          fontSize="8px"
          backgroundColor="black"
          color="#fff"
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

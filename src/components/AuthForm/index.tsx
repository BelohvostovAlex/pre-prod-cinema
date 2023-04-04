import { FunctionComponent, useState, FormEvent } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import Button from "../UI/Buttons/Button";

import { useAuthBySocialNetwork } from "../../hooks/authBySocial/useAuthBySocialNetworks";
import { useAuthFormText } from "./config/useAuthFormText";

import { TypographyVariant } from "../../constants/styles/typography";
import { ButtonTypes } from "../../constants/buttons";
import { ReactComponent as ProfileIcon } from "../../assets/svg/form/account.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/form/email.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form/password.svg";
import { ReactComponent as SurnamIcon } from "../../assets/svg/form/surname.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/social/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/social/facebook.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/social/github.svg";
import { AuthFormProps } from "./interfaces";
import {
  BottomInfoWrapper,
  Box,
  ButtonGroup,
  Form,
  FormTitle,
  Input,
  Link,
  Span,
  Typography,
} from "./styles";

const AuthForm: FunctionComponent<AuthFormProps> = ({
  signUp = true,
  onFormTypeChange,
  onSubmit,
}) => {
  const {
    title,
    titleSpan,
    username,
    surname,
    email,
    password,
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
  const [name, setName] = useState("");
  const [sur, setSur] = useState("");
  const [pass, setPass] = useState("");
  const [em, setEm] = useState("");
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(em, pass, name, sur);
  };

  return (
    <div>
      <FormTitle>
        {title}
        <Span>{titleSpan}</Span>
      </FormTitle>
      <Form onSubmit={handleSubmit}>
        {signUp && (
          <>
            <Box>
              <ProfileIcon />
              <Input
                type="text"
                name="username"
                id="username"
                placeholder={username.placeholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box>
              <SurnamIcon />
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder={surname.placeholder}
                value={sur}
                onChange={(e) => setSur(e.target.value)}
              />
            </Box>
          </>
        )}
        <Box>
          <EmailIcon />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={email.placeholder}
            value={em}
            onChange={(e) => setEm(e.target.value)}
          />
        </Box>
        <Box>
          <PasswordIcon />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder={password.placeholder}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Box>
        {signUp ? (
          <Button
            buttonType={ButtonTypes.PRIMARY}
            typography={TypographyVariant.poppins_l}
            onClick={() => handleSubmit}
            width="100%"
          >
            {signUpBtn}
          </Button>
        ) : (
          <Button
            buttonType={ButtonTypes.PRIMARY}
            typography={TypographyVariant.poppins_l}
            onClick={() => handleSubmit}
            width="100%"
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

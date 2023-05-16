import { FunctionComponent } from "react";

import AuthForm from "../../forms/AuthForm";
import { useSignIn } from "../../hooks/auth/authByEmail/useSignIn";

import { SignInProps } from "./interfaces";

const SignIn: FunctionComponent<SignInProps> = ({
  signUp,
  onFormTypeChange,
  handlePortal,
}) => {
  const handleSignIn = useSignIn(handlePortal);

  return (
    <AuthForm
      onFormTypeChange={onFormTypeChange}
      onSubmit={handleSignIn}
      signUp={signUp}
      handlePortal={handlePortal}
    />
  );
};

export default SignIn;

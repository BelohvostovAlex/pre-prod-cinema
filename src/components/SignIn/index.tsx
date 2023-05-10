import { FunctionComponent } from "react";

import AuthForm from "../AuthForm";
import { useSignIn } from "../../hooks/auth/authByEmail/useSignIn";

import { SignInProps } from "./interfaces";

const SignIn: FunctionComponent<SignInProps> = ({
  onFormTypeChange,
  signUp,
}) => {
  const handleSignIn = useSignIn();

  return (
    <AuthForm
      onFormTypeChange={onFormTypeChange}
      onSubmit={handleSignIn}
      signUp={signUp}
    />
  );
};

export default SignIn;

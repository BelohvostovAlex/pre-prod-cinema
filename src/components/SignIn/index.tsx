import { FunctionComponent } from "react";

import { useSignIn } from "@hooks/auth/authByEmail/useSignIn";

import AuthForm from "../AuthForm";

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

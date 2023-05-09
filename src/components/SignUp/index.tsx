import { FunctionComponent } from "react";

import { useSignUp } from "@hooks/auth/authByEmail/useSignUp";

import AuthForm from "../AuthForm";

import { SignUpProps } from "./interfaces";

const SignUp: FunctionComponent<SignUpProps> = ({
  onFormTypeChange,
  signUp,
}) => {
  const handleSignUp = useSignUp();

  return (
    <AuthForm
      onSubmit={handleSignUp}
      onFormTypeChange={onFormTypeChange}
      signUp={signUp}
    />
  );
};

export default SignUp;

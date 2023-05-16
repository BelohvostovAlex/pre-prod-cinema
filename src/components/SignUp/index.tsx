import { FunctionComponent } from "react";

import AuthForm from "../../forms/AuthForm";
import { useSignUp } from "../../hooks/auth/authByEmail/useSignUp";

import { SignUpProps } from "./interfaces";

const SignUp: FunctionComponent<SignUpProps> = ({
  signUp,
  onFormTypeChange,
  handlePortal,
}) => {
  const handleSignUp = useSignUp(handlePortal);

  return (
    <AuthForm
      onSubmit={handleSignUp}
      onFormTypeChange={onFormTypeChange}
      signUp={signUp}
      handlePortal={handlePortal}
    />
  );
};

export default SignUp;

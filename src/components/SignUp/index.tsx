import { FunctionComponent } from "react";

import AuthForm from "../AuthForm";
import { useSignUp } from "../../hooks/auth/authByEmail/useSignUp";

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

export interface AuthFormInputProps {
  email: string;
  password: string;
  surname: string;
  username: string;
  gender?: string;
  photo?: string;
}

export interface AuthFormProps {
  signUp?: boolean;

  onFormTypeChange: () => void;
  onSubmit: (options: AuthFormInputProps) => void;
  handlePortal: () => void;
}

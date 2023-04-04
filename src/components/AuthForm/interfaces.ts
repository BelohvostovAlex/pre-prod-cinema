export interface AuthFormProps {
  signUp?: boolean;
  onFormTypeChange: () => void;
  onSubmit: (
    email: string,
    password: string,
    username: string,
    surname: string,
  ) => void;
}

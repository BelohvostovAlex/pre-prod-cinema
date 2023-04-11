import { FunctionComponent } from "react";

import { InputProps, InputTypes } from "./interfaces";
import { ErrorText, InoutLabel, InputWrapper, StyledInput } from "./styles";

const Input: FunctionComponent<InputProps> = ({
  type = InputTypes.TEXT,
  label,
  placeholder,
  htmlFor,
  id,
  register,
  inputName,
  validateOptions,
  error,
}) => {
  return (
    <InputWrapper>
      <InoutLabel htmlFor={htmlFor}>
        {label}
        <StyledInput
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(inputName, validateOptions)}
        />
      </InoutLabel>
      <ErrorText>{error}</ErrorText>
    </InputWrapper>
  );
};

export default Input;

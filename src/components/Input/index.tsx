import { FunctionComponent } from "react";

import { InoutLabel, InputWrapper, StyledInput } from "./styles";
import { InputProps, InputTypes } from "./interfaces";

const Input: FunctionComponent<InputProps> = ({
  type = InputTypes.TEXT,
  label,
  placeholder,
  htmlFor,
  id,
  register,
  inputName,
  validateOptions,
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
    </InputWrapper>
  );
};

export default Input;

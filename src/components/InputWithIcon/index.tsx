import { FunctionComponent } from "react";

import Input from "@components/Input";
import { InputTypes } from "@components/Input/interfaces";

import { InputWithIconProps } from "./interfaces";
import { Box } from "./styles";

const InputWithIcon: FunctionComponent<InputWithIconProps> = ({
  icon,
  placeholder,
  type = InputTypes.TEXT,
  htmlFor,
  id,
  label,
  register,
  inputName,
  validateOptions,
  error,
}) => {
  return (
    <Box>
      {icon}{" "}
      <Input
        placeholder={placeholder}
        type={type}
        htmlFor={htmlFor}
        id={id}
        label={label}
        register={register}
        inputName={inputName}
        validateOptions={validateOptions}
        error={error}
      />
    </Box>
  );
};

export default InputWithIcon;

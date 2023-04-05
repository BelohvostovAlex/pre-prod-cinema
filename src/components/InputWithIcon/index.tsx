import { FunctionComponent } from "react";

import Input from "../Input";

import { InputWithIconProps } from "./interfaces";
import { InputTypes } from "../Input/interfaces";
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
      />
    </Box>
  );
};

export default InputWithIcon;

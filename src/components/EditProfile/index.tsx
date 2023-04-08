import { FunctionComponent, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useEditText } from "./config/useEditText";
import {
  EditProfileForm,
  EditProfileWrapper,
  InputFileWrapper,
  InputGenderWrapper,
  InputRadio,
  InputUploadFile,
  InputUploadFileLabel,
} from "./styles";
import ModalTitle from "../Modal/ModalTitle";
import InputWithIcon from "../InputWithIcon";
import PasswordStrengthMeter from "../PasswordStrengthMeter";
import Button from "../UI/Buttons/Button";

import { AuthFormInputsPossibleNames, Gender } from "../../constants/authForm";
import { handleValidationType } from "../AuthForm/config/validation";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userSelector } from "../../store/slices/userSlice/selectors";
import { ButtonTypes, ButtonVariants } from "../../constants/buttons";
import { TypographyVariant } from "../../constants/styles/typography";

import { ReactComponent as ProfileIcon } from "../../assets/svg/form/account.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form/password.svg";
import { ReactComponent as SurnamIcon } from "../../assets/svg/form/surname.svg";
import { ReactComponent as ImageIcon } from "../../assets/svg/form/image-file.svg";
import { ReactComponent as GenderIcon } from "../../assets/svg/form/gender.svg";
import { InputTypes } from "../Input/interfaces";
import { AuthFormInputProps } from "../AuthForm/interfaces";
import { defaultFormValue } from "./config/constants";

const EditProfile: FunctionComponent = () => {
  const { gender, surname, username } = useAppSelector(userSelector);
  const {
    title,
    titleSpan,
    female,
    male,
    passPlaceholder,
    submitBtn,
    uploadImg,
  } = useEditText();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, errors },
  } = useForm<AuthFormInputProps>({
    mode: "onChange",
    defaultValues: useMemo(
      () => ({
        surname: surname || defaultFormValue.surname,
        username: username || defaultFormValue.username,
      }),
      [surname, username],
    ),
  });

  const onSubmitHandler: SubmitHandler<AuthFormInputProps> = (data) => {
    if (isValid) {
      reset();
    }
  };
  return (
    <EditProfileWrapper>
      <ModalTitle text={title} spanText={titleSpan} />
      <EditProfileForm onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWithIcon
          id="username"
          icon={<ProfileIcon />}
          register={register}
          inputName={AuthFormInputsPossibleNames.USERNAME}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.USERNAME,
          )}
          error={errors.username?.message}
          defaultValue={"username"}
        />
        <InputWithIcon
          id="surname"
          icon={<SurnamIcon />}
          register={register}
          inputName={AuthFormInputsPossibleNames.SURNAME}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.SURNAME,
          )}
          error={errors.surname?.message}
          defaultValue={surname}
        />
        <InputFileWrapper>
          <InputUploadFileLabel htmlFor="file">
            <InputUploadFile type="file" id="file" hidden />
            <ImageIcon /> {uploadImg}
          </InputUploadFileLabel>
        </InputFileWrapper>
        <InputGenderWrapper>
          <GenderIcon />
          <InputUploadFileLabel htmlFor="male">
            {male}
            <InputRadio
              type="radio"
              id="male"
              name="gender"
              value="male"
              defaultChecked={gender === Gender.MALE}
            />
          </InputUploadFileLabel>

          <InputUploadFileLabel htmlFor="female">
            {female}
            <InputRadio
              type="radio"
              id="female"
              name="gender"
              value="female"
              defaultChecked={gender === Gender.FEMALE}
            />
          </InputUploadFileLabel>
        </InputGenderWrapper>
        <InputWithIcon
          type={InputTypes.PASSWORD}
          id="password"
          icon={<PasswordIcon />}
          register={register}
          inputName={AuthFormInputsPossibleNames.PASSWORD}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.PASSWORD,
          )}
          placeholder={passPlaceholder}
          error={errors.password?.message}
        />
        <PasswordStrengthMeter value={watch().password} />
        <Button
          variant={ButtonVariants.PRIMARY}
          typography={TypographyVariant.poppins_l}
          width="100%"
          buttonTypes={ButtonTypes.SUBMIT}
        >
          {submitBtn}
        </Button>
      </EditProfileForm>
    </EditProfileWrapper>
  );
};

export default EditProfile;

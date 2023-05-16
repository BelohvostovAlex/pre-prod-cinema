import { FunctionComponent, useMemo } from "react";
import { useForm } from "react-hook-form";

import ModalTitle from "@components/Modal/ModalTitle";
import PasswordStrengthMeter from "@components/PasswordStrengthMeter";
import Button from "@ui/Buttons/Button";
import InputWithIcon from "@components/InputWithIcon";
import { ReactComponent as ProfileIcon } from "@assets/svg/form/account.svg";
import { ReactComponent as GenderIcon } from "@assets/svg/form/gender.svg";
import { ReactComponent as ImageIcon } from "@assets/svg/form/image-file.svg";
import { ReactComponent as PasswordIcon } from "@assets/svg/form/password.svg";
import { ReactComponent as SurnamIcon } from "@assets/svg/form/surname.svg";
import { AuthFormInputsPossibleNames, Gender } from "@constants/authForm";
import { ButtonVariants } from "@constants/buttons";
import { FirebaseCollections } from "@constants/firebase/collections";
import { TypographyVariant } from "@constants/styles/typography";
import { useEditProfile } from "@hooks/editProfile/useEditProfile";
import { useAppSelector } from "@hooks/useAppSelector";
import { userSelector } from "@store/slices/userSlice/selectors";
import { useValidationWithTranslate } from "@forms/AuthForm/hooks/useValidationWithTranslate";
import { AuthFormInputProps } from "@forms/AuthForm/interfaces";
import { InputTypes } from "@components/Input/interfaces";

import {
  EditProfileForm,
  EditProfileWrapper,
  InputFileWrapper,
  InputGenderWrapper,
  InputRadio,
  InputUploadFile,
  InputUploadFileLabel,
} from "./styles";
import { useEditText } from "./hooks/useEditText";
import { defaultFormValue } from "./config/constants";
import { btnSubmitWidth } from "./config";

const EditProfile: FunctionComponent = () => {
  const { gender, surname, username, id, photo } = useAppSelector(userSelector);
  const handleValidationType = useValidationWithTranslate();
  const {
    title,
    titleSpan,
    female,
    male,
    passPlaceholder,
    submitBtn,
    uploadImg,
    surnameTitle,
    usernameTitle,
    genderTitle,
    passTitle,
  } = useEditText();
  const {
    register,
    handleSubmit,
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

  const { handleFileChange, onSubmitHandler } = useEditProfile({
    collection: FirebaseCollections.USERS,
    currUser: { surname, gender, username, photo },
    id,
    isValid,
  });

  return (
    <EditProfileWrapper>
      <ModalTitle text={title} spanText={titleSpan} />
      <EditProfileForm onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWithIcon
          id={AuthFormInputsPossibleNames.USERNAME}
          icon={<ProfileIcon title={usernameTitle} />}
          register={register}
          inputName={AuthFormInputsPossibleNames.USERNAME}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.USERNAME,
            false,
          )}
          error={errors.username?.message}
          defaultValue={username}
        />
        <InputWithIcon
          id={AuthFormInputsPossibleNames.SURNAME}
          icon={<SurnamIcon title={surnameTitle} />}
          register={register}
          inputName={AuthFormInputsPossibleNames.SURNAME}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.SURNAME,
            false,
          )}
          error={errors.surname?.message}
          defaultValue={surname}
        />
        <InputFileWrapper>
          <InputUploadFileLabel htmlFor="file">
            <InputUploadFile
              type={InputTypes.FILE}
              id="file"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
            <ImageIcon title={uploadImg} /> {uploadImg}
          </InputUploadFileLabel>
        </InputFileWrapper>
        <InputGenderWrapper>
          <GenderIcon title={genderTitle} />
          <InputUploadFileLabel htmlFor={Gender.MALE}>
            {male}
            <InputRadio
              {...register("gender", { required: true })}
              type={InputTypes.RADIO}
              id={Gender.MALE}
              name="gender"
              value={Gender.MALE}
              defaultChecked={gender === Gender.MALE}
            />
          </InputUploadFileLabel>
          <InputUploadFileLabel htmlFor={Gender.FEMALE}>
            {female}
            <InputRadio
              {...register("gender", { required: true })}
              type={InputTypes.RADIO}
              id={Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              defaultChecked={gender === Gender.FEMALE}
            />
          </InputUploadFileLabel>
        </InputGenderWrapper>
        <InputWithIcon
          type={InputTypes.PASSWORD}
          id={AuthFormInputsPossibleNames.PASSWORD}
          icon={<PasswordIcon title={passTitle} />}
          register={register}
          inputName={AuthFormInputsPossibleNames.PASSWORD}
          validateOptions={handleValidationType(
            AuthFormInputsPossibleNames.PASSWORD,
            false,
          )}
          placeholder={passPlaceholder}
          error={errors.password?.message}
        />
        <PasswordStrengthMeter value={watch().password} />
        <Button
          variant={ButtonVariants.PRIMARY}
          typography={TypographyVariant.poppins_l}
          width={btnSubmitWidth}
          type="submit"
        >
          {submitBtn}
        </Button>
      </EditProfileForm>
    </EditProfileWrapper>
  );
};

export default EditProfile;

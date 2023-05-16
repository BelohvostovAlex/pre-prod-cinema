import { FunctionComponent, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { AppPathes } from "../../../constants/routes";
import { AuthFormInputsPossibleNames } from "../../../constants/authForm";
import { ReactComponent as LogoIcon } from "../../../assets/svg/logo/logo.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/svg/social/telegram.svg";
import { InputTypes } from "../../Input/interfaces";
import { useActions } from "../../../hooks/useActionts";
import { useValidationWithTranslate } from "../../AuthForm/hooks/useValidationWithTranslate";
import { AlertTypes } from "../../../constants/alert";

import {
  FooterColumn,
  FooterColumnItem,
  FooterColumnSubscribeSubText,
  FooterColumnTitle,
  FooterLogo,
  FooterSubmitBtn,
  FooterSubscribeInput,
  FooterSubscribeInputWrapper,
  FooterWrapper,
} from "./styles";
import { useFooterText } from "./hooks/useFooterText";
import { FooterFormProps } from "./interfaces";

const FooterMain: FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setIsAlertOpen } = useActions();
  const handleValidationType = useValidationWithTranslate();
  const { pathname } = useLocation();
  const {
    firstColumnTitle,
    firstColumnToMain,
    secondColumnTitle,
    secondColumnToMain,
    subscribe,
    subscribeInputPlaceholder,
    subscribeSubtext,
    thirdColumnTitle,
    thirdColumnToMain,
    subsError,
    subsSuccess,
  } = useFooterText();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FooterFormProps>({ mode: "onChange" });

  const onSubmitHandler: SubmitHandler<FooterFormProps> = (data) => {
    if (isValid) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE!,
          process.env.REACT_APP_EMAILJS_TEMPLATE!,
          formRef.current as HTMLFormElement,
          process.env.REACT_APP_EMAILJS_PRIVATE_KEY!,
        )
        .then(
          () => {
            setIsAlertOpen({
              isOpen: true,
              text: subsSuccess,
              type: AlertTypes.SUCCESS,
            });
          },
          () => {
            setIsAlertOpen({
              isOpen: true,
              text: subsError,
              type: AlertTypes.ERROR,
            });
          },
        );

      reset();
    }
  };

  const isFooterVisible = pathname !== AppPathes.MAIN;
  return (
    <FooterWrapper visible={isFooterVisible}>
      <FooterLogo>
        <LogoIcon />
      </FooterLogo>
      <FooterColumn>
        <FooterColumnTitle>{firstColumnTitle}</FooterColumnTitle>
        {Array.from(Array(4).keys()).map((item) => (
          <FooterColumnItem key={item}>
            <Link to={AppPathes.MAIN}>{firstColumnToMain}</Link>
          </FooterColumnItem>
        ))}
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{secondColumnTitle}</FooterColumnTitle>
        {Array.from(Array(3).keys()).map((item) => (
          <FooterColumnItem key={item}>
            <Link to={AppPathes.MAIN}>{secondColumnToMain}</Link>
          </FooterColumnItem>
        ))}
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{thirdColumnTitle}</FooterColumnTitle>
        {Array.from(Array(3).keys()).map((item) => (
          <FooterColumnItem key={item}>
            <Link to={AppPathes.MAIN}>{thirdColumnToMain}</Link>
          </FooterColumnItem>
        ))}
      </FooterColumn>
      <FooterColumn>
        <FooterColumnTitle>{subscribe}</FooterColumnTitle>
        <FooterSubscribeInputWrapper
          ref={formRef}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <FooterSubscribeInput
            type={InputTypes.EMAIL}
            placeholder={subscribeInputPlaceholder}
            {...register(
              "user_email",
              handleValidationType(AuthFormInputsPossibleNames.EMAIL),
            )}
          />
          <FooterSubmitBtn type="submit">
            <TelegramIcon />
          </FooterSubmitBtn>
        </FooterSubscribeInputWrapper>
        <FooterColumnSubscribeSubText>
          {subscribeSubtext}
        </FooterColumnSubscribeSubText>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default FooterMain;

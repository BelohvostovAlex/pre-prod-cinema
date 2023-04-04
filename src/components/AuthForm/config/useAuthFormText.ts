import { useTranslation } from "react-i18next";

export const useAuthFormText = (signUp: boolean) => {
  const { t } = useTranslation();

  return {
    title: signUp ? t("AuthForm.title.signup") : t("AuthForm.title.signin"),
    titleSpan: signUp
      ? t("AuthForm.titleSpan.signup")
      : t("AuthForm.titleSpan.signin"),
    username: {
      label: t("AuthForm.usernameField.label"),
      placeholder: t("AuthForm.usernameField.placeholder"),
      required: t("AuthForm.usernameField.required"),
    },
    surname: {
      label: t("AuthForm.surnameField.label"),
      placeholder: t("AuthForm.surnameField.placeholder"),
      required: t("AuthForm.surnameField.required"),
    },
    email: {
      label: t("AuthForm.emailField.label"),
      placeholder: t("AuthForm.emailField.placeholder"),
      required: t("AuthForm.emailField.required"),
    },
    password: {
      label: t("AuthForm.passwordField.label"),
      placeholder: t("AuthForm.passwordField.placeholder"),
      required: t("AuthForm.passwordField.required"),
    },
    googleBtn: t("AuthForm.signInWithGoogle"),
    githubrBtn: t("AuthForm.signInWithGithub"),
    facebookBtn: t("AuthForm.signInWithFacebook"),
    needAcc: t("AuthForm.needAcc"),
    alreadyHaveAcc: t("AuthForm.alreadyHaveAcc"),
    linkToSignIn: t("AuthForm.linkToSignIn"),
    linkToSignUp: t("AuthForm.linkToSignUp"),
    signInBtn: t("AuthForm.signInBtn"),
    signUpBtn: t("AuthForm.signUpBtn"),
  };
};

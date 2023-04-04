export enum AlertTypes {
  ERROR = "error",
  SUCCESS = "success",
}

export const initialAlertValue = {
  isOpen: false,
  text: "",
  type: AlertTypes.ERROR,
};

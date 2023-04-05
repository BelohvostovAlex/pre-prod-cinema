import { FunctionComponent } from "react";

import ModalTitle from "../Modal/ModalTitle";

import { useEditText } from "./config/useEditText";

import { EditProfileWrapper } from "./styles";

const EditProfile: FunctionComponent = () => {
  const { title, titleSpan } = useEditText();
  return (
    <EditProfileWrapper>
      <ModalTitle text={title} spanText={titleSpan} />
    </EditProfileWrapper>
  );
};

export default EditProfile;

import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@store/index";
import { allActionCreators } from "@store/slices/action-creators";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(
    () => bindActionCreators(allActionCreators, dispatch),
    [dispatch],
  );
};

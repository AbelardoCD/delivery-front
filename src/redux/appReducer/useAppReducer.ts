import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxPackages } from "../ReduxPackages";
import { AppReducerTypes } from "./AppReducerTypes";

export const useAppReducer = () => {
  const dispatch = useDispatch();
  const redux = useSelector(({ app }: ReduxPackages) => app);
  const { openModal, showBackdrop, backdropComponent } = redux;

  const setOpenModal = (payload: boolean) => {
    dispatch({
      type: AppReducerTypes.SET_OPEN_MODAL,
      payload,
    });
  };

  const setShowBackdrop = (payload: boolean) => {
    dispatch({
      type: AppReducerTypes.SET_SHOW_BACKDROP,
      payload,
    });
  };

  const setBackdropComponent = (payload: ReactNode | ReactNode[]) => {
    dispatch({
      type: AppReducerTypes.SET_BACKDROP_COMPONENT,
      payload,
    });
  };
  return {
    setOpenModal,
    openModal,
    setShowBackdrop,
    showBackdrop,
    backdropComponent,
    setBackdropComponent,
  };
};
